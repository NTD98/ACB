import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardbackinfoComponent } from './cardbackinfo.component';

describe('CardbackinfoComponent', () => {
  let component: CardbackinfoComponent;
  let fixture: ComponentFixture<CardbackinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardbackinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardbackinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
