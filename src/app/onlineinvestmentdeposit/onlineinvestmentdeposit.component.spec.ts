import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineInvestmentDepositComponent } from './onlineinvestmentdeposit.component';

describe('OnlineInvestmentDepositComponent', () => {
  let component: OnlineInvestmentDepositComponent;
  let fixture: ComponentFixture<OnlineInvestmentDepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineInvestmentDepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineInvestmentDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
