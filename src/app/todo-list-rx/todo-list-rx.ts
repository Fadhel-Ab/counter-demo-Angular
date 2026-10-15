import { Component, inject } from '@angular/core';
import { TodoRx } from '../services/todo-rx';
import { AsyncPipe } from '@angular/common';

@Component({
  imports: [AsyncPipe],
  selector: 'app-todo-list-rx',
  styleUrl: './todo-list-rx.css',
  templateUrl: './todo-list-rx.html',
})
export class TodoListRx {
  store = inject(TodoRx);
}
