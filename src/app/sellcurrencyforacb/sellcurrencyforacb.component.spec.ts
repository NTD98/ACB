import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellCurrencyForACBComponent } from './sellcurrencyforacb.component';

describe('SellCurrencyForACBComponent', () => {
  let component: SellCurrencyForACBComponent;
  let fixture: ComponentFixture<SellCurrencyForACBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellCurrencyForACBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellCurrencyForACBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
