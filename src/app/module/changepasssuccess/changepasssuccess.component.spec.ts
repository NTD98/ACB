import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepasssuccessComponent } from './changepasssuccess.component';

describe('ChangepasssuccessComponent', () => {
  let component: ChangepasssuccessComponent;
  let fixture: ComponentFixture<ChangepasssuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangepasssuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepasssuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
