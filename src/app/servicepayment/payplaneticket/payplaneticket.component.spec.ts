import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayplaneticketComponent } from './payplaneticket.component';

describe('PayplaneticketComponent', () => {
  let component: PayplaneticketComponent;
  let fixture: ComponentFixture<PayplaneticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayplaneticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayplaneticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
