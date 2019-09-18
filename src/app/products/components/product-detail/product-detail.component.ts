import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Product } from '@products/models/product.model';
import { ProductService } from '@products/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params
    .subscribe((params: Params) => {
      const id = params.id;
      this.product = this.productService.getProduct(id);
    });
  }

}
