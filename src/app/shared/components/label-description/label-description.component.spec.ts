import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelDescriptionComponent } from './label-description.component';
import { By } from '@angular/platform-browser';

describe('LabelDescriptionComponent', () => {
  let component: LabelDescriptionComponent;
  let fixture: ComponentFixture<LabelDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabelDescriptionComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(LabelDescriptionComponent);
    component = fixture.componentInstance;
    component.idElement = 'mockData';
    component.label = 'mockData';
    component.description = 'mockData';
    component.isURL = true;
    fixture.detectChanges();
  });

  it('create', () => {
    expect(component).toBeTruthy();
  });

  it('input params', () => {
    const { debugElement } = fixture;
    const labelCustom = debugElement.query(
      By.css('[data-testid="label-custom"]')
    );
    const aCustom = debugElement.query(
      By.css('[data-testid="a-custom"]')
    );
    const children = labelCustom.childNodes;
    expect(labelCustom.attributes['id']).toBe('mockData');
    expect(children.length).toBe(1);
    expect(aCustom.attributes['href']).toBe('mockData');
  });
});
