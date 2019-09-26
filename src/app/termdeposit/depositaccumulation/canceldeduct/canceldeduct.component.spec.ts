import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanceldeductComponent } from './canceldeduct.component';

describe('CanceldeductComponent', () => {
  let component: CanceldeductComponent;
  let fixture: ComponentFixture<CanceldeductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanceldeductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanceldeductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
