import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanceldepositComponent } from './canceldeposit.component';

describe('CanceldepositComponent', () => {
  let component: CanceldepositComponent;
  let fixture: ComponentFixture<CanceldepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanceldepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanceldepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
