import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleangelComponent } from './littleangel.component';

describe('LittleangelComponent', () => {
  let component: LittleangelComponent;
  let fixture: ComponentFixture<LittleangelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LittleangelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LittleangelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
