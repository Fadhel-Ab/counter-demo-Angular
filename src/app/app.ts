import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './counter/counter';
import { CounterRx } from './counter-rx/counter-rx';
import { TodoList } from './todo-list/todo-list';

@Component({
  imports: [RouterOutlet, Counter, CounterRx, TodoList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('counter-demo');
  show = signal(true);
}
