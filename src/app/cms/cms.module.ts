import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CmsRoutingModule } from './cms-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

import { MaterialModule } from '@material/material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    NavComponent,
    ProductFormComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    CmsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class CmsModule { }
