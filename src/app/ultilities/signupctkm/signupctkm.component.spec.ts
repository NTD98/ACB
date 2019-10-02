import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupctkmComponent } from './signupctkm.component';

describe('SignupctkmComponent', () => {
  let component: SignupctkmComponent;
  let fixture: ComponentFixture<SignupctkmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupctkmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupctkmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
