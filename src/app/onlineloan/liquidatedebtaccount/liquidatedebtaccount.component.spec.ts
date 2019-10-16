import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidatedebtaccountComponent } from './liquidatedebtaccount.component';

describe('LiquidatedebtaccountComponent', () => {
  let component: LiquidatedebtaccountComponent;
  let fixture: ComponentFixture<LiquidatedebtaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiquidatedebtaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidatedebtaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
