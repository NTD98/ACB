import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeaccountbalanceComponent } from './changeaccountbalance.component';

describe('ChangeaccountbalanceComponent', () => {
  let component: ChangeaccountbalanceComponent;
  let fixture: ComponentFixture<ChangeaccountbalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeaccountbalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeaccountbalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
