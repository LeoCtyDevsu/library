import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxComponent } from './checkbox.component';
import { By } from '@angular/platform-browser';
import { click } from '../../helpers/testing.helper';

describe('CheckboxComponent', () => {
  let component: CheckboxComponent;
  let fixture: ComponentFixture<CheckboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(CheckboxComponent);
    component = fixture.componentInstance;
    component.class = 'mb-3';
    component.idElement = 'button-1';
    component.label = 'button';
    component.value = true;
    fixture.detectChanges();
  });

  it('create', () => {
    expect(component).toBeTruthy();
  });

  it('input params', () => {
    const { debugElement } = fixture;
    const customCheckbox = debugElement.query(
      By.css('[data-testid="custom-checkbox"]')
    );
    const button = customCheckbox.nativeElement as HTMLInputElement;
    expect(customCheckbox.classes['mb-3']).toBeTruthy();
    expect(customCheckbox.attributes['id']).toBe('button-1');
  });

  it('click event', () => {
    let state: boolean | undefined;
    component.onClickEvent.subscribe((res) => {
      state = res;
    });
    click(fixture, 'custom-checkbox');
    expect(state).toBeTruthy();
  });
});
