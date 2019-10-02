import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisableaccountstatusComponent } from './disableaccountstatus.component';

describe('DisableaccountstatusComponent', () => {
  let component: DisableaccountstatusComponent;
  let fixture: ComponentFixture<DisableaccountstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisableaccountstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisableaccountstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
