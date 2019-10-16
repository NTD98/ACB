import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignuppaydebtComponent } from './signuppaydebt.component';

describe('SignuppaydebtComponent', () => {
  let component: SignuppaydebtComponent;
  let fixture: ComponentFixture<SignuppaydebtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignuppaydebtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignuppaydebtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
