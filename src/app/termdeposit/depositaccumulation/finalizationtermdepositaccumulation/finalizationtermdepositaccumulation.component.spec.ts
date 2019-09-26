import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizationtermdepositaccumulationComponent } from './finalizationtermdepositaccumulation.component';

describe('FinalizationtermdepositaccumulationComponent', () => {
  let component: FinalizationtermdepositaccumulationComponent;
  let fixture: ComponentFixture<FinalizationtermdepositaccumulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalizationtermdepositaccumulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizationtermdepositaccumulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
