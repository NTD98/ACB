import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargedttdComponent } from './rechargedttd.component';

describe('RechargedttdComponent', () => {
  let component: RechargedttdComponent;
  let fixture: ComponentFixture<RechargedttdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechargedttdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargedttdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
