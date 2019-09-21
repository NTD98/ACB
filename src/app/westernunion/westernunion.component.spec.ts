import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WesternUnionComponent } from './westernunion.component';

describe('WesternUnionComponent', () => {
  let component: WesternUnionComponent;
  let fixture: ComponentFixture<WesternUnionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WesternUnionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WesternUnionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
