import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { BehaviorSubject, interval, map } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  imports: [AsyncPipe],
  selector: 'app-counter-rx',
  styleUrl: './counter-rx.css',
  templateUrl: './counter-rx.html',
})
export class CounterRx {
  count$ = new BehaviorSubject<number>(0); // the $ suffix is the convention for streams
  double$ = this.count$.pipe(map((c) => c * 2));

  constructor() {
    interval(1000)
      .pipe(takeUntilDestroyed())
      .subscribe((n) => console.log('tick' + n));
  }

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
