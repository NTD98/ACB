import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferToCardACBComponent } from './transfertocardacb.component';

describe('TransferToCardACBComponent', () => {
  let component: TransferToCardACBComponent;
  let fixture: ComponentFixture<TransferToCardACBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferToCardACBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferToCardACBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
