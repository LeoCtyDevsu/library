import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: CheckboxComponent,
    },
  ],
})
export class CheckboxComponent implements ControlValueAccessor {
  @Input() idElement: string = '';
  @Input() label: string = '';
  @Input() class: string = '';
  @Input() value: any;
  @Output() onClickEvent: EventEmitter<boolean> = new EventEmitter();
  onChange = (value: any) => {};
  onTouched = () => {};
  disabled = false;
  errorMenssage?: string;

  onClickEventNotification() {
    this.onClickEvent.emit(true);
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
