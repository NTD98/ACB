import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockunlockcardComponent } from './lockunlockcard.component';

describe('LockunlockcardComponent', () => {
  let component: LockunlockcardComponent;
  let fixture: ComponentFixture<LockunlockcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockunlockcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockunlockcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
