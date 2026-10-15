import { Component, inject } from '@angular/core';
import { TodoItem, Todo } from '../services/todo';
import { TodoRow } from '../todo-row/todo-row';

@Component({
  imports: [TodoRow],
  selector: 'app-todo-list',
  styleUrl: './todo-list.css',
  templateUrl: './todo-list.html',
})
export class TodoList {
  store = inject(Todo);
}
