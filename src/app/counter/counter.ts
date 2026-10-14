import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-counter',
  styleUrl: './counter.css',
  templateUrl: './counter.html',
})
export class Counter {
  count = signal(0);
  increment(): void {
    this.count.update((c) => c + 1);
  }

  decrement(): void {
    this.count.update((c) => c - 1);
  }

  reset(): void {
    this.count.set(0);
  }
}
