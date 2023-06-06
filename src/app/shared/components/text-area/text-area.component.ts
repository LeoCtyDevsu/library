import { Component, Input, SimpleChanges } from '@angular/core';
import {
  ControlValueAccessor,
  FormGroup,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: TextAreaComponent,
    },
  ],
})
export class TextAreaComponent implements ControlValueAccessor {
  @Input() idElement: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() errors?: ValidationErrors | null;
  onChange = (value: any) => {};
  onTouched = () => {};
  disabled = false;
  errorMenssage?: string;
  value: any;

  ngOnChanges(changes: SimpleChanges) {
    switch (true) {
      case this.errors?.['required']: {
        this.errorMenssage = `Campo: ${this.label} es requerido.`;
        break;
      }
    }
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
