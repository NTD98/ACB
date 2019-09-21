import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpOnlineComponent } from './signuponline.component';

describe('SignUpOnlineComponent', () => {
  let component: SignUpOnlineComponent;
  let fixture: ComponentFixture<SignUpOnlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpOnlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
