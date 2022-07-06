import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/shared/product';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  title!: string
  form!: FormGroup
  fields: Product<string>[] | null = []
  dataValue: any;
  func: any;
  
  constructor(
    public inventoryService : InventoryService,
    public dialogRef: MatDialogRef<ModalComponent>,
    public formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {}
    
    ngOnInit(): void {
      this.getFunction()
    }

    getFunction() {
      if('addDataOnTable'.includes(this.data.function)) {
        this.fields = this.data.fields
        this.form = this.inventoryService.toFormGroup(this.fields as Product<string>[])
        this.func = 'Add'
        this.title = "Adicionar"
        return
    }else if('editProduct'.includes(this.data.function)) {
      let data = this.data.data
      this.fields = this.data.fields.map((field: any) => {
        if(['brand', 'model'].includes(field.key))
          field['readonly'] = true
        return field
      })
      this.form = this.inventoryService.editFormGroup(this.fields as Product<string>[], data)
      this.func = 'Edit'
      this.title = "Editar"
      return
    }
  }

  submitForm() {
    if (this.form.valid) {
      this.dialogRef.close({
        event: this.func,
        data: this.form.value
      })
    }
  }

  editProduct() {
    if (this.form.valid) {
      this.dialogRef.close({
        event: 'Edit',
        data: this.form.value
      })
    }
  }

  closeModal() {
    this.dialogRef.close({
      event: null
    })
  }
}
