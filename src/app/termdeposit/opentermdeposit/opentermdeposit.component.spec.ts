import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpentermdepositComponent } from './opentermdeposit.component';

describe('OpentermdepositComponent', () => {
  let component: OpentermdepositComponent;
  let fixture: ComponentFixture<OpentermdepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpentermdepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpentermdepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
