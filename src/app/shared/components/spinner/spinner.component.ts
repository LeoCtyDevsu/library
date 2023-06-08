import { Component, Input, OnDestroy } from '@angular/core';
import { SpinnerService } from '../../services/spinner.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnDestroy {
  @Input() show: boolean = false;
  private ngUnsubscribe = new Subject<void>();

  constructor(private _spinnerService: SpinnerService) {
    this._spinnerService.spinner$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((state: boolean) => {
        this.show = state;
      });
  }

  ngOnDestroy(): void {
    this.unSubscribeAll();
  }

  unSubscribeAll() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
