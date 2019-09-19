import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductsRoutingModule } from './products-routing.module';

import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';

import { ProductService } from './services/product.service';

import { SharedModule } from '@shared/shared.module';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductFormAltComponent } from './components/product-form-alt/product-form-alt.component';

import { MaterialModule } from '@material/material.module';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductFormComponent,
    ProductFormAltComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [
    ProductService,
  ]
})
export class ProductsModule { }
