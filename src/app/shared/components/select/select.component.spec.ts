import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectComponent } from './select.component';
import { By } from '@angular/platform-browser';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    component.idElement = 'button-1';
    component.label = 'button';
    component.elements = [{ label: 'mockData', value: 'mockData' }];
    fixture.detectChanges();
  });

  it('create', () => {
    expect(component).toBeTruthy();
  });

  it('input params', () => {
    const { debugElement } = fixture;
    const customSelect = debugElement.query(
      By.css('[data-testid="custom-select"]')
    );
    const customOption = debugElement.query(
      By.css('[data-testid="custom-option"]')
    );
    expect(customSelect.attributes['id']).toBe('button-1');
    expect(customOption).toBeTruthy();
  });

  it('change event', () => {
    const { debugElement } = fixture;
    const customSelect = debugElement.query(
      By.css('[data-testid="custom-select"]')
    );
    let mockValue: string | null = '';
    component.onChangeEvent.subscribe((res) => {
      mockValue = res;
    });
    customSelect.triggerEventHandler('change', {target:{value: 'A'}});
    expect(mockValue).toBe('mockData');
  });
});
