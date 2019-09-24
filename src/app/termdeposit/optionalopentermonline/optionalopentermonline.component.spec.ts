import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionalopentermonlineComponent } from './optionalopentermonline.component';

describe('OptionalopentermonlineComponent', () => {
  let component: OptionalopentermonlineComponent;
  let fixture: ComponentFixture<OptionalopentermonlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionalopentermonlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionalopentermonlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
