import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeddeposittransactionaccumulationComponent } from './listeddeposittransactionaccumulation.component';

describe('ListeddeposittransactionaccumulationComponent', () => {
  let component: ListeddeposittransactionaccumulationComponent;
  let fixture: ComponentFixture<ListeddeposittransactionaccumulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeddeposittransactionaccumulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeddeposittransactionaccumulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
