import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomaticdepositComponent } from './automaticdeposit.component';

describe('AutomaticdepositComponent', () => {
  let component: AutomaticdepositComponent;
  let fixture: ComponentFixture<AutomaticdepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomaticdepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomaticdepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
