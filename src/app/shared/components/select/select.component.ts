import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectItem } from '../../models/select-item.model.';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  @Input() idElement: string = '';
  @Input() elements: SelectItem[] = [];
  @Input() label: string = '';
  @Output() onChangeEvent: EventEmitter<string> = new EventEmitter();

  onChangeEventNotification(value: string) {
    this.onChangeEvent.emit(value);
  }
}
