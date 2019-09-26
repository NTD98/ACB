import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentmoneytoaccountaccumulationComponent } from './sentmoneytoaccountaccumulation.component';

describe('SentmoneytoaccountaccumulationComponent', () => {
  let component: SentmoneytoaccountaccumulationComponent;
  let fixture: ComponentFixture<SentmoneytoaccountaccumulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentmoneytoaccountaccumulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentmoneytoaccountaccumulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
