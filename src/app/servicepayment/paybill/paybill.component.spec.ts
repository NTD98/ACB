import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaybillComponent } from './paybill.component';

describe('PaybillComponent', () => {
  let component: PaybillComponent;
  let fixture: ComponentFixture<PaybillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaybillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaybillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
