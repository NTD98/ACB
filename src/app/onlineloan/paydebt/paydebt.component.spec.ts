import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaydebtComponent } from './paydebt.component';

describe('PaydebtComponent', () => {
  let component: PaydebtComponent;
  let fixture: ComponentFixture<PaydebtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaydebtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaydebtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
