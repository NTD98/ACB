import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayadslComponent } from './payadsl.component';

describe('PayadslComponent', () => {
  let component: PayadslComponent;
  let fixture: ComponentFixture<PayadslComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayadslComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayadslComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
