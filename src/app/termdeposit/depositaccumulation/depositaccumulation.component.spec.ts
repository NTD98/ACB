import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositaccumulationComponent } from './depositaccumulation.component';

describe('DepositaccumulationComponent', () => {
  let component: DepositaccumulationComponent;
  let fixture: ComponentFixture<DepositaccumulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositaccumulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositaccumulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
