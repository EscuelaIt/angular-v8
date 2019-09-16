import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightDirective } from './directives/highlight.directive';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { FibonacciPipe } from './pipes/fibonacci.pipe';
import { ReversePipe } from './pipes/reverse.pipe';

@NgModule({
  declarations: [
    HighlightDirective,
    DateFormatPipe,
    FibonacciPipe,
    ReversePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    DateFormatPipe,
    FibonacciPipe,
    ReversePipe
  ]
})
export class SharedModule { }
