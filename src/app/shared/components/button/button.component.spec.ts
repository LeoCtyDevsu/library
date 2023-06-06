import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { click } from '../../helpers/testing.helper';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    component.class = 'mb-3';
    component.disabled = true;
    component.idElement = 'button-1';
    component.label = 'button';
    component.type = 'secundary';
    fixture.detectChanges();
  });

  it('create', () => {
    expect(component).toBeTruthy();
  });

  it('input params', () => {
    const { debugElement } = fixture;
    const customButton = debugElement.query(
      By.css('[data-testid="custom-button"]')
    );
    const button = customButton.nativeElement as HTMLButtonElement;
    expect(customButton.classes['mb-3']).toBeTruthy();
    expect(customButton.classes['secundary']).toBeTruthy();
    expect(customButton.attributes['id']).toBe('button-1');
    expect(button.disabled).toBeTruthy();
  });

  it('click event', () => {
    let state: boolean | undefined;
    component.onClickEvent.subscribe((res) => {
      state = res;
    });
    click(fixture, 'custom-button');
    expect(state).toBeTruthy();
  });
});
