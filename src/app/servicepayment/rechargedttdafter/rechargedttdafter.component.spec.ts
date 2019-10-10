import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargedttdafterComponent } from './rechargedttdafter.component';

describe('RechargedttdafterComponent', () => {
  let component: RechargedttdafterComponent;
  let fixture: ComponentFixture<RechargedttdafterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechargedttdafterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargedttdafterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
