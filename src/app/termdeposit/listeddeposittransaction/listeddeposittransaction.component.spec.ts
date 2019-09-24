import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeddeposittransactionComponent } from './listeddeposittransaction.component';

describe('ListeddeposittransactionComponent', () => {
  let component: ListeddeposittransactionComponent;
  let fixture: ComponentFixture<ListeddeposittransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeddeposittransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeddeposittransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
