import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from 'src/app/shared/product';

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.scss']
})
export class FieldsComponent implements OnInit {
  
  @Input()form!: FormGroup
  @Input()field!: Product<string>
  @Input()data!: Product<string>

  constructor() { }

  ngOnInit(): void {
  }

  get isInvalidalid() {
    return this.form.controls[this.field.key].errors &&
    this.form.controls[this.field.key].touched;
  }
  get isChecked() {
    return !this.form.controls[this.field.key].errors &&
    this.form.controls[this.field.key].touched && !this.field.readonly;
  }
}
