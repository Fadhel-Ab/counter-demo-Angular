import { TestBed } from '@angular/core/testing';
import { TodoRx } from './todo-rx';

describe('TodoRx', () => {
  let service: TodoRx;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoRx);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
