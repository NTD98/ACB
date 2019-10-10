import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiaryaccountoutacbComponent } from './beneficiaryaccountoutacb.component';

describe('BeneficiaryaccountoutacbComponent', () => {
  let component: BeneficiaryaccountoutacbComponent;
  let fixture: ComponentFixture<BeneficiaryaccountoutacbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficiaryaccountoutacbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiaryaccountoutacbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
