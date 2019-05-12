import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MosquitoComponent } from './mosquito.component';

describe('MosquitoComponent', () => {
  let component: MosquitoComponent;
  let fixture: ComponentFixture<MosquitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MosquitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MosquitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
