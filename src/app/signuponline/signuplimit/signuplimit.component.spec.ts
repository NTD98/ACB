import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignuplimitComponent } from './signuplimit.component';

describe('SignuplimitComponent', () => {
  let component: SignuplimitComponent;
  let fixture: ComponentFixture<SignuplimitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignuplimitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignuplimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
