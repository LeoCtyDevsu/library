import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';
import { By } from '@angular/platform-browser';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    component.placeholder = 'mockPlaceholder';
    component.idElement = 'input-1';
    component.label = 'input';
    fixture.detectChanges();
  });

  it('create', () => {
    expect(component).toBeTruthy();
  });

  it('input params', () => {
    const { debugElement } = fixture;
    const inputCustom = debugElement.query(
      By.css('[data-testid="input-custom"]')
    );
    expect(inputCustom.attributes['id']).toBe('input-1');
    expect(inputCustom.attributes['placeholder']).toBe('mockPlaceholder');
  });

  it('click event', () => {
    const { debugElement } = fixture;
    const inputCustom = debugElement.query(
      By.css('[data-testid="input-custom"]')
    );
    let mockValue: string | null = '';
    component.onKeyupEvent.subscribe((res) => {
      mockValue = res;
    });
    inputCustom.triggerEventHandler('keyup', {target:{value: 'A'}});
    expect(mockValue).toBe('undefined');
  });
});
