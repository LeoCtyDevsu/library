import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelDescriptionComponent } from './label-description.component';

describe('LabelDescriptionComponent', () => {
  let component: LabelDescriptionComponent;
  let fixture: ComponentFixture<LabelDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabelDescriptionComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(LabelDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('create', () => {
    expect(component).toBeTruthy();
  });
});
