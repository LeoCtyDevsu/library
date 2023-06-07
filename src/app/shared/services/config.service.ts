import { APP_INITIALIZER, Injectable } from '@angular/core';
import { ConfigModel } from '../models/config.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  public configSubject: BehaviorSubject<ConfigModel> =
    new BehaviorSubject<ConfigModel>({});
  public configModel$: Observable<ConfigModel> =
    this.configSubject.asObservable();

  constructor(private _httpClient: HttpClient) {}

  load() {
    this._httpClient
      .get<ConfigModel>('./assets/config/config-app.json')
      .subscribe((response) => {
        this.configSubject.next(response as ConfigModel);
      });
  }

  getConfig() {
    return this.configSubject.getValue();
  }
}

export function ConfigFactory(config: ConfigService) {
  return () => config.load();
}

export function init() {
  return {
    provide: APP_INITIALIZER,
    useFactory: ConfigFactory,
    deps: [ConfigService],
    multi: true,
  };
}

const ConfigModule = {
  init: init,
};

export { ConfigModule };
