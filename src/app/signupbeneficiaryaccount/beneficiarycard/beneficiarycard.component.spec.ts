import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficiarycardComponent } from './beneficiarycard.component';

describe('BeneficiarycardComponent', () => {
  let component: BeneficiarycardComponent;
  let fixture: ComponentFixture<BeneficiarycardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeneficiarycardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeneficiarycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
