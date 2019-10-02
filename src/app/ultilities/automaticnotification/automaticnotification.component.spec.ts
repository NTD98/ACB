import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomaticnotificationComponent } from './automaticnotification.component';

describe('AutomaticnotificationComponent', () => {
  let component: AutomaticnotificationComponent;
  let fixture: ComponentFixture<AutomaticnotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomaticnotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutomaticnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
