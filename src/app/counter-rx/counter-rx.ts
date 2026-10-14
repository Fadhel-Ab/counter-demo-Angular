import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  imports: [AsyncPipe],
  selector: 'app-counter-rx',
  styleUrl: './counter-rx.css',
  templateUrl: './counter-rx.html',
})
export class CounterRx {
  count$ = new BehaviorSubject<number>(0); // the $ suffix is the convention for streams

  increment(): void {
    this.count$.next(this.count$.value + 1);
  }
  decrement(): void {
    this.count$.next(this.count$.value - 1);
  }
  reset(): void {
    this.count$.next(0);
  }
}
