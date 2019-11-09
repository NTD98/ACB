import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfersuccessComponent } from './transfersuccess.component';

describe('TransfersuccessComponent', () => {
  let component: TransfersuccessComponent;
  let fixture: ComponentFixture<TransfersuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransfersuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfersuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
