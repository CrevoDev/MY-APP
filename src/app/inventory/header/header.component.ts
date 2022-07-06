import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/product';
import { ModalComponent } from '../modal/modal.component';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  fields$: Observable<Product<any>[]>;

  openModal: boolean = false
  constructor(
    public dialog: MatDialog,
    public inventoryService: InventoryService
  ) {
    this.fields$ = inventoryService.getFields();
   }


  @Output() addData: EventEmitter<any> = new EventEmitter();
  @Output() removeData: EventEmitter<any> = new EventEmitter();
  @Output() search: EventEmitter<any> = new EventEmitter();
  @ViewChild('searchBar') searchBar! : ElementRef<any>

  ngOnInit() {
    
  }

  searchItem() {
    let data: any = this.searchBar.nativeElement.value
    this.search.emit(data)
  }

  addDataToParent(product: Product<string>) {
    let data = product
    this.addData.emit(data)
  }

  openModalToAdd(): void {
    let data
    this.fields$.subscribe(res => {
      data = res
    })
    const dialogRef = this.dialog.open(ModalComponent, {
      maxWidth: "80vw",
      maxHeight: "80vh",
      data: {
        fields: data,
        function: 'addDataOnTable'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result.event == 'Add'){
        this.addDataToParent(result.data);
      }
    });
  }
}
