import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { MatListModule } from '@angular/material/list';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { MatIconModule } from '@angular/material/icon'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    ContentComponent,
    DeleteDialogComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  providers: [
  ],
  exports: [
    ContentComponent
  ]
})
export class ContentModule { }
