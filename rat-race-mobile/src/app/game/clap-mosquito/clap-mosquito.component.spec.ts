import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClapMosquitoComponent } from './clap-mosquito.component';

describe('ClapMosquitoComponent', () => {
  let component: ClapMosquitoComponent;
  let fixture: ComponentFixture<ClapMosquitoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClapMosquitoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClapMosquitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
