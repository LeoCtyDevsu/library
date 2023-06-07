import { TestBed } from '@angular/core/testing';

import { SpinnerService } from './spinner.service';

describe('SpinnerService', () => {
  let service: SpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinnerService);
  });

  it('be created', () => {
    expect(service).toBeTruthy();
  });

  it('show', () => {
    service.show();
    const state = service.spinnerSubject.value;
    expect(state).toBeTruthy();
  });

  it('hide', () => {
    service.hide();
    const state = service.spinnerSubject.value;
    expect(state).toBeFalsy();
  });
});
