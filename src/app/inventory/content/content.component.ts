import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/product';
import { InventoryService } from '../inventory.service';
import { ModalComponent } from '../modal/modal.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})

export class ContentComponent implements OnInit {

  fields$: Observable<Product<any>[]>

  constructor(
    public dialog : MatDialog,
    public inventoryService : InventoryService,
  ) {
    this.fields$ = inventoryService.getFields();
   }

  @Input() items : any
  @Output() refresh : EventEmitter<any> = new EventEmitter
  ngOnInit(): void {

  }

  openDeleteModal(item:any) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: item
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Remove') {
        this.inventoryService.removeData(result.data)
      }
      this.refresh.emit()
    })
  }

  openEditModal(item:Product<any>) {
    let fields
    this.fields$.subscribe(res => fields = res)
    const dialogRef = this.dialog.open(ModalComponent, {
      maxWidth: "80vw",
      maxHeight: "80vh",
      data: {
        fields: fields,
        data: item,
        function: 'editProduct'
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Edit')
        this.inventoryService.editData(result.data, item)
      this.refresh.emit()
    })
  }

  getCurrency(value:any) {
    value = parseInt(value)
    return value.toLocaleString(undefined, {
      style: 'currency',
      currency: 'BRL',
    });
  }

}
