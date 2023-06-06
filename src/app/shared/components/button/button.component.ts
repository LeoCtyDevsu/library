import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() idElement: string = '';
  @Input() label: string = '';
  @Input() type: string = 'primary';
  @Input() class: string = '';
  @Input() disabled: boolean = false;
  @Output() onClickEvent: EventEmitter<boolean> = new EventEmitter();

  onClickEventNotification() {
    this.onClickEvent.emit(true);
  }
}
