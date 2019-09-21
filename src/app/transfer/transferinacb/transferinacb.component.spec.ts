import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferInACBComponent } from './transferinacb.component';

describe('TransferInACBComponent', () => {
  let component: TransferInACBComponent;
  let fixture: ComponentFixture<TransferInACBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferInACBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferInACBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
