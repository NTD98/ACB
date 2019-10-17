import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkwalletComponent } from './linkwallet.component';

describe('LinkwalletComponent', () => {
  let component: LinkwalletComponent;
  let fixture: ComponentFixture<LinkwalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkwalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkwalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
