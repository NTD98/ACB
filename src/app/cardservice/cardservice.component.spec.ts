import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardServiceComponent } from './cardservice.component';

describe('CardServiceComponent', () => {
  let component: CardServiceComponent;
  let fixture: ComponentFixture<CardServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
