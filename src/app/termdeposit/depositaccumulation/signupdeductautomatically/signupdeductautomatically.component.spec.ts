import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupdeductautomaticallyComponent } from './signupdeductautomatically.component';

describe('SignupdeductautomaticallyComponent', () => {
  let component: SignupdeductautomaticallyComponent;
  let fixture: ComponentFixture<SignupdeductautomaticallyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupdeductautomaticallyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupdeductautomaticallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
