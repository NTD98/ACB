import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpBeneficiaryAccountComponent } from './signupbeneficiaryaccount.component';

describe('SignUpBeneficiaryAccountComponent', () => {
  let component: SignUpBeneficiaryAccountComponent;
  let fixture: ComponentFixture<SignUpBeneficiaryAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpBeneficiaryAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpBeneficiaryAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
