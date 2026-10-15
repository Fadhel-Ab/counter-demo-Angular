import { Component, input, output } from '@angular/core';
import { TodoItem } from '../services/todo';

@Component({
  imports: [],
  selector: 'app-todo-row',
  styleUrl: './todo-row.css',
  templateUrl: './todo-row.html',
})
export class TodoRow {
  todo = input.required<TodoItem>();
  toggled = output<number>();
  removed = output<number>();

  toggle() {
    this.toggled.emit(this.todo().id);
  }

  remove() {
    this.removed.emit(this.todo().id);
  }
}
