import { Injectable, Service } from '@angular/core';
import { TodoItem } from './todo';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodoRx {
  private _todos$ = new BehaviorSubject<TodoItem[]>([]);
  todos$ = this._todos$.asObservable(); // readonly
  remaining$ = this.todos$.pipe(map((list) => list.filter((t) => !t.done).length)); //computable older alternative

  private nextId = 0;

  add(title: string) {
    const newItem: TodoItem = {
      id: this.nextId++,
      title: title,
      done: false,
    };
    const currentList = this._todos$.value;
    this._todos$.next([...currentList, newItem]);
  }
  toggle(id: number) {
    this._todos$.next(this._todos$.value.map((i) => (i.id === id ? { ...i, done: !i.done } : i)));
  }

  remove(id: number) {
    this._todos$.next(this._todos$.value.filter((i) => i.id !== id));
  }
}
