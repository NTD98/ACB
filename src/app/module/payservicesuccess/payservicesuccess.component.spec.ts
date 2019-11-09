import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayservicesuccessComponent } from './payservicesuccess.component';

describe('PayservicesuccessComponent', () => {
  let component: PayservicesuccessComponent;
  let fixture: ComponentFixture<PayservicesuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayservicesuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayservicesuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
