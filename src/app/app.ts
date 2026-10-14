import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './counter/counter';
import { CounterRx } from './counter-rx/counter-rx';

@Component({
  imports: [RouterOutlet, Counter, CounterRx],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('counter-demo');
}
