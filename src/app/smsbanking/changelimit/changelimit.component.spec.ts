import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangelimitComponent } from './changelimit.component';

describe('ChangelimitComponent', () => {
  let component: ChangelimitComponent;
  let fixture: ComponentFixture<ChangelimitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangelimitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangelimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
