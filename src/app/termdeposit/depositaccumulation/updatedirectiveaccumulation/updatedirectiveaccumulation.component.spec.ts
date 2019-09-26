import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedirectiveaccumulationComponent } from './updatedirectiveaccumulation.component';

describe('UpdatedirectiveaccumulationComponent', () => {
  let component: UpdatedirectiveaccumulationComponent;
  let fixture: ComponentFixture<UpdatedirectiveaccumulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatedirectiveaccumulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedirectiveaccumulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
