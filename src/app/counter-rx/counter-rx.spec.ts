import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterRx } from './counter-rx';

describe('CounterRx', () => {
  let component: CounterRx;
  let fixture: ComponentFixture<CounterRx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterRx],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterRx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
