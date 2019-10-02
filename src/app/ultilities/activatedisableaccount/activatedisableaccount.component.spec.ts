import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedisableaccountComponent } from './activatedisableaccount.component';

describe('ActivatedisableaccountComponent', () => {
  let component: ActivatedisableaccountComponent;
  let fixture: ComponentFixture<ActivatedisableaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivatedisableaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatedisableaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
