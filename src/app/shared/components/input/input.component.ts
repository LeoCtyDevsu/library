import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormGroup,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputComponent,
    },
  ],
})
export class InputComponent implements OnChanges, ControlValueAccessor {
  @Input() idElement: string = '';
  @Input() type: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() formParent?: FormGroup | null;
  @Input() errors?: ValidationErrors | null;
  @Output() onKeyupEvent: EventEmitter<string | null> = new EventEmitter();
  onChange = (value: any) => {};
  onTouched = () => {};
  disabled = false;
  errorMenssage?: string;
  value: any;

  constructor() {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnChanges(changes: SimpleChanges) {
    switch (true) {
      case this.errors?.['required']: {
        this.errorMenssage = `Campo: ${this.label} es requerido.`;
        break;
      }
      case this.errors?.['email']: {
        this.errorMenssage = `El formato del correo no es correcto.`;
        break;
      }
      case this.errors?.['passwordStrength']: {
        this.errorMenssage = `La contraseña debe tener un mínimo de 8 caracteres, un carácter en mayúscula, un carácter numérico y un carácter especial.`;
        break;
      }
      case this.formParent?.errors?.['notSame']: {
        this.errorMenssage = `Las contraseñas no coinciden.`;
        break;
      }
      case this.errors?.['usernameAlreadyExists']: {
        this.errorMenssage = `Nombre de usuario ocupado.`;
        break;
      }
      case this.errors?.['usernameNotExists']: {
        this.errorMenssage = `Nombre de usuario no existe.`;
        break;
      }
      case this.errors?.['pattern'] !== null: {
        this.errorMenssage = `Campo: ${this.label} no tiene el formato correcto.`;
        break;
      }
    }
  }

  onKeyupEventNotification(value: string | null) {
    this.onKeyupEvent.emit(value);
  }

  writeValue(value: any) {
    this.value = value;
  }
}
