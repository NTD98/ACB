import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaytvComponent } from './paytv.component';

describe('PaytvComponent', () => {
  let component: PaytvComponent;
  let fixture: ComponentFixture<PaytvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaytvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaytvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
