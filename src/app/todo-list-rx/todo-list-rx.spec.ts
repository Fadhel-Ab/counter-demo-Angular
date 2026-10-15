import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListRx } from './todo-list-rx';

describe('TodoListRx', () => {
  let component: TodoListRx;
  let fixture: ComponentFixture<TodoListRx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListRx],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListRx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
