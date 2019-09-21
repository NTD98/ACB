import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferOutACBComponent } from './transferoutacb.component';

describe('TransferOutACBComponent', () => {
  let component: TransferOutACBComponent;
  let fixture: ComponentFixture<TransferOutACBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferOutACBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferOutACBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
