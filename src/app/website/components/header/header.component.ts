import { Component, OnInit } from '@angular/core';

import { CartService } from './../../cart/services/cart.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  totalProducts$: Observable<number>;

  constructor(
    private cart: CartService
  ) {
    this.totalProducts$ = this.cart.cart$
    .pipe(
      map(products => products.length)
    );
  }

  ngOnInit() {
    // this.cart.cart$
    // .subscribe(products => {
    //   this.totalProducts = products.length;
    // });
  }

}
