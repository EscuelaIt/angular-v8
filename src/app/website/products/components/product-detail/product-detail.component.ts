import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Product } from '@products/models/product.model';
import { ProductService } from '@products/services/product.service';

import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product$: Observable<Product>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {
    this.product$ = this.activatedRoute.params
    .pipe(
      switchMap((params: Params) => {
        const id = params.id;
        return this.productService.getProduct(id);
      })
    );
  }

  ngOnInit() {
  }

}
