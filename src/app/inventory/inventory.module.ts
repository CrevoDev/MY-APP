import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory.component';
import { HeaderModule } from './header/header.module';
import { ContentModule } from './content/content.module';
import { FooterModule } from './footer/footer.module';
import { InventoryService } from './inventory.service';
import { ModalComponent } from './modal/modal.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { FieldsComponent } from './modal/fields/fields.component';



@NgModule({
  declarations: [
    InventoryComponent,
    ModalComponent,
    FieldsComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    ContentModule,
    FooterModule,
    FormsModule,
    ReactiveFormsModule,
    CurrencyMaskModule,
    MatIconModule
  ],
  providers: [
    InventoryService
  ]
})
export class InventoryModule { }
