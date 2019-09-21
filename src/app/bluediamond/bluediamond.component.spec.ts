import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueDiamondComponent } from './bluediamond.component';

describe('BlueDiamondComponent', () => {
  let component: BlueDiamondComponent;
  let fixture: ComponentFixture<BlueDiamondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlueDiamondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueDiamondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
