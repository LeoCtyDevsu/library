import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAreaComponent } from './text-area.component';
import { By } from '@angular/platform-browser';

describe('TextAreaComponent', () => {
  let component: TextAreaComponent;
  let fixture: ComponentFixture<TextAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextAreaComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(TextAreaComponent);
    component = fixture.componentInstance;
    component.idElement = 'mockData';
    component.placeholder = 'mockData';
    fixture.detectChanges();
  });

  it('create', () => {
    expect(component).toBeTruthy();
  });

  it('input params', () => {
    const { debugElement } = fixture;
    const textAreaCustom = debugElement.query(
      By.css('[data-testid="textarea-custom"]')
    );
    expect(textAreaCustom.attributes['id']).toBe('mockData');
    expect(textAreaCustom.attributes['placeholder']).toBe('mockData');
  });
});
