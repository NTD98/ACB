import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedirectiveComponent } from './updatedirective.component';

describe('UpdatedirectiveComponent', () => {
  let component: UpdatedirectiveComponent;
  let fixture: ComponentFixture<UpdatedirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatedirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
