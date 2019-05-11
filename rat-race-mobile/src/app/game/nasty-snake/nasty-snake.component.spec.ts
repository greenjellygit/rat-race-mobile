import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NastySnakeComponent } from './nasty-snake.component';

describe('NastySnakeComponent', () => {
  let component: NastySnakeComponent;
  let fixture: ComponentFixture<NastySnakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NastySnakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NastySnakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
