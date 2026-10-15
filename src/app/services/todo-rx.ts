import { Injectable, Service } from '@angular/core';
import { TodoItem } from './todo';
import { BehaviorSubject, combineLatest, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodoRx {
  private _todos$ = new BehaviorSubject<TodoItem[]>([]);
  todos$ = this._todos$.asObservable(); // readonly
  remaining$ = this.todos$.pipe(map((list) => list.filter((t) => !t.done).length)); //computable older alternative

  private nextId = 0;

  private _filter$ = new BehaviorSubject<'all' | 'active' | 'done'>('all');
  filter$ = this._filter$.asObservable();
  visible$ = combineLatest([this._todos$, this.filter$]).pipe(
    map(([todos, currentFilter]) => {
      // const todos = this._todos$.value; no need use the ones provide by the combile lates
      // const currentFilter = this.filter$.value; no need use the ones provide by the combile lates
      const filterMap = {
        active: () => todos.filter((i) => i.done === false),
        done: () => todos.filter((i) => i.done === true),
        all: () => todos,
      };
      return filterMap[currentFilter]();
    }),
  );
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
  setFilter(value: 'all' | 'active' | 'done') {
    this._filter$.next(value);
  }
}
