import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignuptpinComponent } from './signuptpin.component';

describe('SignuptpinComponent', () => {
  let component: SignuptpinComponent;
  let fixture: ComponentFixture<SignuptpinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignuptpinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignuptpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
