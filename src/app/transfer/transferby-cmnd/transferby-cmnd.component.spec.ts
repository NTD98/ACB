import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferByCMNDComponent } from './transferby-cmnd.component';

describe('TransferByCMNDComponent', () => {
  let component: TransferByCMNDComponent;
  let fixture: ComponentFixture<TransferByCMNDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferByCMNDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferByCMNDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
