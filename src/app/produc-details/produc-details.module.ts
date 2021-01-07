import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { ProducDetailsRoutingModule } from './produc-details-routing.module';
import { ProductComponent } from './product/product.component';
import { MaterialsModule } from "../material.module";
import { AddProductComponent } from './add-product/add-product.component';


@NgModule({
  declarations: [ProductComponent, AddProductComponent],
  imports: [
    CommonModule,
    ProducDetailsRoutingModule,
    FormsModule,
    MaterialsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  entryComponents: [AddProductComponent]
})
export class ProducDetailsModule { }
