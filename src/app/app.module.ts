import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ReversePipe } from './reverse.pipe';
import { DateFormatPipe } from './date-format.pipe';
import { ListComponent } from './components/list/list.component';
import { FibonacciPipe } from './pipes/fibonacci.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { UsersListComponent } from './components/users-list/users-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    ReversePipe,
    DateFormatPipe,
    ListComponent,
    FibonacciPipe,
    HighlightDirective,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
