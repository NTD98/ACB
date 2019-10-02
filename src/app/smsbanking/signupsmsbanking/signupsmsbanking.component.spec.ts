import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupsmsbankingComponent } from './signupsmsbanking.component';

describe('SignupsmsbankingComponent', () => {
  let component: SignupsmsbankingComponent;
  let fixture: ComponentFixture<SignupsmsbankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupsmsbankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupsmsbankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
