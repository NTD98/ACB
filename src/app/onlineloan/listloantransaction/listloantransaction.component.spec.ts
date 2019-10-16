import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListloantransactionComponent } from './listloantransaction.component';

describe('ListloantransactionComponent', () => {
  let component: ListloantransactionComponent;
  let fixture: ComponentFixture<ListloantransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListloantransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListloantransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
