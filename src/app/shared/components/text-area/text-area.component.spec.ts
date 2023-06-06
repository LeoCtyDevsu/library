import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAreaComponent } from './text-area.component';

describe('TextAreaComponent', () => {
  let component: TextAreaComponent;
  let fixture: ComponentFixture<TextAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextAreaComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(TextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('create', () => {
    expect(component).toBeTruthy();
  });
});
