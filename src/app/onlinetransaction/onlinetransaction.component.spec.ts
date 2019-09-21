import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineTransactionComponent } from './onlinetransaction.component';

describe('OnlineTransactionComponent', () => {
  let component: OnlineTransactionComponent;
  let fixture: ComponentFixture<OnlineTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
