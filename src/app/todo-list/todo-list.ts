import { Component, inject } from '@angular/core';
import { TodoItem, Todo } from '../services/todo';

@Component({
  imports: [],
  selector: 'app-todo-list',
  styleUrl: './todo-list.css',
  templateUrl: './todo-list.html',
})
export class TodoList {
  store = inject(Todo);
}
