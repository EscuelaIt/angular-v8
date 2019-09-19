import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '@products/models/product.model';
import { ProductService } from '@products/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.products = this.productService.getAllProducts();
  }

  onClickedProduct(id: number) {
    console.log('clicked', id);
    this.router.navigate(['/products', id]);
  }

}
