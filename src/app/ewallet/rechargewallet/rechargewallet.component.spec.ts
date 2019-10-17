import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargewalletComponent } from './rechargewallet.component';

describe('RechargewalletComponent', () => {
  let component: RechargewalletComponent;
  let fixture: ComponentFixture<RechargewalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechargewalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargewalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
