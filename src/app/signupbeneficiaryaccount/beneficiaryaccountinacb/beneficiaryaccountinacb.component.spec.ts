import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiaryaccountinacbComponent } from './beneficiaryaccountinacb.component';

describe('BeneficiaryaccountinacbComponent', () => {
  let component: BeneficiaryaccountinacbComponent;
  let fixture: ComponentFixture<BeneficiaryaccountinacbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficiaryaccountinacbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiaryaccountinacbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
