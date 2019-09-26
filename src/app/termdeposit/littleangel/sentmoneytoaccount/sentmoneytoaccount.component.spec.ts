import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentmoneytoaccountComponent } from './sentmoneytoaccount.component';

describe('SentmoneytoaccountComponent', () => {
  let component: SentmoneytoaccountComponent;
  let fixture: ComponentFixture<SentmoneytoaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentmoneytoaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentmoneytoaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
