import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaytrainticketComponent } from './paytrainticket.component';

describe('PaytrainticketComponent', () => {
  let component: PaytrainticketComponent;
  let fixture: ComponentFixture<PaytrainticketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaytrainticketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaytrainticketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
