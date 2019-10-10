import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaydtcdComponent } from './paydtcd.component';

describe('PaydtcdComponent', () => {
  let component: PaydtcdComponent;
  let fixture: ComponentFixture<PaydtcdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaydtcdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaydtcdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
