import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizationtermdepositComponent } from './finalizationtermdeposit.component';

describe('FinalizationtermdepositComponent', () => {
  let component: FinalizationtermdepositComponent;
  let fixture: ComponentFixture<FinalizationtermdepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalizationtermdepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizationtermdepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
