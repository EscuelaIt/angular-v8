import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '@products/models/product.model';

@Component({
  selector: 'app-product',
  styleUrls: ['./product.component.scss'],
  templateUrl: './product.component.html'
})
export class ProductComponent {

  @Input() product: Product;
  @Output() clickedProduct = new EventEmitter<number>();

  today = new Date();

  viewDetail() {
    console.log('viewDetail', this.product.title);
    this.clickedProduct.emit(this.product.id);
  }

}
