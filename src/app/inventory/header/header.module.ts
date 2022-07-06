import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
