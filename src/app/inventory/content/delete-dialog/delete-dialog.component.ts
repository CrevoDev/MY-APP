import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/app/shared/product';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {

  addDataForm!: FormGroup
  formInvalid: boolean = false

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    public formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

  }

  removeData() {
    this.dialogRef.close({
      event: 'Remove',
      data: this.data
    })
  }

  closeModal() {
    this.dialogRef.close({
      event: null
    })
  }

}
