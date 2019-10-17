import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellcurrencyComponent } from './sellcurrency.component';

describe('SellcurrencyComponent', () => {
  let component: SellcurrencyComponent;
  let fixture: ComponentFixture<SellcurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellcurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellcurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
