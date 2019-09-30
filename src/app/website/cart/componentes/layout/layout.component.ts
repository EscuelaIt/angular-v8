import { Component, OnInit, OnDestroy } from '@angular/core';

import { CartService } from './../../services/cart.service';
import { Product } from '@products/models/product.model';
import { Subscription, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  products$: Observable<Product[]>;
  sub: Subscription;

  constructor(
    private cart: CartService
  ) {
    this.products$ = this.cart.cart$
    .pipe(
      tap(() => console.log('se agrego'))
    );
  }

  ngOnInit() {
    // this.sub = this.cart.cart$
    // .subscribe(products => {
    //   console.log('se agrego producto');
    //   this.products = products;
    // });
  }

  ngOnDestroy() {
    console.log('eliminar');
    // this.sub.unsubscribe();
  }

}
