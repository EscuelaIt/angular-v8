import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CmsRoutingModule } from './cms-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

import { MaterialModule } from '@material/material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';


@NgModule({
  declarations: [
    NavComponent,
    ProductFormComponent,
    DashboardComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    CmsRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class CmsModule { }
