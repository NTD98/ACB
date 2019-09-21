import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermDepositComponent } from './termdeposit.component';

describe('TermDepositComponent', () => {
  let component: TermDepositComponent;
  let fixture: ComponentFixture<TermDepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermDepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
