import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FastTransferOutACBComponent } from './fasttransferoutacb.component';

describe('FastTransferOutACBComponent', () => {
  let component: FastTransferOutACBComponent;
  let fixture: ComponentFixture<FastTransferOutACBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastTransferOutACBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FastTransferOutACBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
