import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiaryaccountinTTHDComponent } from './beneficiaryaccountin-tthd.component';

describe('BeneficiaryaccountinTTHDComponent', () => {
  let component: BeneficiaryaccountinTTHDComponent;
  let fixture: ComponentFixture<BeneficiaryaccountinTTHDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficiaryaccountinTTHDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiaryaccountinTTHDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
