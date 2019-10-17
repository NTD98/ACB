import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedtransactionComponent } from './listedtransaction.component';

describe('ListedtransactionComponent', () => {
  let component: ListedtransactionComponent;
  let fixture: ComponentFixture<ListedtransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListedtransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListedtransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
