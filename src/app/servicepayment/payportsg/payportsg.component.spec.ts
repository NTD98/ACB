import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayportsgComponent } from './payportsg.component';

describe('PayportsgComponent', () => {
  let component: PayportsgComponent;
  let fixture: ComponentFixture<PayportsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayportsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayportsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
