import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductFormAltComponent } from './components/product-form-alt/product-form-alt.component';


const routes: Routes = [
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: 'new',
    component: ProductFormComponent
  },
  {
    path: 'new-alt',
    component: ProductFormAltComponent
  },
  {
    path: ':id',
    component: ProductDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
