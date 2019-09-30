import { Component, OnInit } from '@angular/core';

import { ProductService } from '@products/services/product.service';
import { Product } from '@products/models/product.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  dataSource: Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.dataSource = this.productService.getAllProducts();
  }

}
