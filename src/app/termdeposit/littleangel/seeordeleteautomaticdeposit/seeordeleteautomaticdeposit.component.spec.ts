import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeordeleteautomaticdepositComponent } from './seeordeleteautomaticdeposit.component';

describe('SeeordeleteautomaticdepositComponent', () => {
  let component: SeeordeleteautomaticdepositComponent;
  let fixture: ComponentFixture<SeeordeleteautomaticdepositComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeeordeleteautomaticdepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeordeleteautomaticdepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
