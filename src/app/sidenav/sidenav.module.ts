import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    SidenavComponent,
  ]
})
export class SidenavModule { }
