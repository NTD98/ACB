import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargegamecardComponent } from './rechargegamecard.component';

describe('RechargegamecardComponent', () => {
  let component: RechargegamecardComponent;
  let fixture: ComponentFixture<RechargegamecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RechargegamecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargegamecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
