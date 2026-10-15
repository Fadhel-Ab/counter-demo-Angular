import { computed, Injectable, Service, signal } from '@angular/core';

export interface TodoItem {
  id: number;
  title: string;
  done: boolean;
}

@Service()
//@Injectable({providedIn: "root"}) the old way
export class Todo {
  private _todos = signal<TodoItem[]>([]);
  todos = this._todos.asReadonly(); // read only they cannot modify it
  /* remaining = computed(() => {
    return this._todos().reduce((count, todo) => {
      return !todo.done ? count + 1 : count;
    }, 0);
  }); there is a cleaner approach below*/

  remaining = computed(() => this._todos().filter((t) => !t.done).length);
  private nextId = 0;

  // for filters
  filters = signal<'all' | 'active' | 'done'>('all');
  /* visible = computed(() => {
    const todos = this._todos();
    const currentFilter = this.filters();

    if (currentFilter === 'active') return todos.filter((t) => t.done===false);
    if (currentFilter === 'done') return todos.filter((t) => t.done===true);
    return todos;
  }); */

  visible = computed(() => {
    const todos = this._todos();
    const currentFilter = this.filters();

    const filterMap = {
      active: () => todos.filter((t) => t.done === false),
      done: () => todos.filter((t) => t.done === true),
      all: () => todos,
    };
    return filterMap[currentFilter]();
  });

  add(title: string) {
    const currentList = this._todos();
    // const maxId = currentList.length > 0 ? Math.max(...currentList.map((t) => t.id)) : 0; this also works w
    const newItem: TodoItem = {
      id: this.nextId++,
      title: title,
      done: false,
    };

    this._todos.update((currentList) => [...currentList, newItem]);
  }

  toggle(id: number) {
    this._todos.update((currentlist) =>
      currentlist.map((i) => (i.id === id ? { ...i, done: !i.done } : i)),
    );
  }
  remove(id: number) {
    this._todos.update((list) => list.filter((i) => i.id !== id)); // filter returns new array
  }

  setFilter(value: 'all' | 'active' | 'done') {
    this.filters.set(value);
  }
}
