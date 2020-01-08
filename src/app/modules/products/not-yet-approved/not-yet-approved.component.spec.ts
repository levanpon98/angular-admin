import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotYetApprovedComponent } from './not-yet-approved.component';

describe('NotYetApprovedComponent', () => {
  let component: NotYetApprovedComponent;
  let fixture: ComponentFixture<NotYetApprovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotYetApprovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotYetApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
