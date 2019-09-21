import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UltilitiesComponent } from './ultilities.component';

describe('UltilitiesComponent', () => {
  let component: UltilitiesComponent;
  let fixture: ComponentFixture<UltilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UltilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
