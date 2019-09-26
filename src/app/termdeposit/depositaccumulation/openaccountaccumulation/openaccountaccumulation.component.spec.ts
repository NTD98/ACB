import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenaccountaccumulationComponent } from './openaccountaccumulation.component';

describe('OpenaccountaccumulationComponent', () => {
  let component: OpenaccountaccumulationComponent;
  let fixture: ComponentFixture<OpenaccountaccumulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenaccountaccumulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenaccountaccumulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
