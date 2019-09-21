import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineLoanComponent } from './onlineloan.component';

describe('OnlineLoanComponent', () => {
  let component: OnlineLoanComponent;
  let fixture: ComponentFixture<OnlineLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
