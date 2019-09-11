import { Component, Input } from '@angular/core';

import { Product } from './../models/product.model';

@Component({
  selector: 'app-product',
  styleUrls: ['./product.component.scss'],
  templateUrl: './product.component.html'
})
export class ProductComponent {

  @Input() product: Product;

}
