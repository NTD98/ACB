import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomerceserviceComponent } from './ecomerceservice.component';

describe('EcomerceserviceComponent', () => {
  let component: EcomerceserviceComponent;
  let fixture: ComponentFixture<EcomerceserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcomerceserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcomerceserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
