import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListdeposittransactionComponent } from './listdeposittransaction.component';

describe('ListdeposittransactionComponent', () => {
  let component: ListdeposittransactionComponent;
  let fixture: ComponentFixture<ListdeposittransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListdeposittransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListdeposittransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
