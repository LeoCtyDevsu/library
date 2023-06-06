import { Injectable } from '@angular/core';
import { ConfigModel } from '../models/config.model';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from './config.service';
import { Observable } from 'rxjs';
import { CategoryModel } from '../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  configModel: ConfigModel = {};

  constructor(
    private _httpClient: HttpClient,
    private _configService: ConfigService
  ) {
    this.configModel = this._configService.getConfig();
  }

  listCategories(): Observable<CategoryModel[]> {
    return this._httpClient.get<CategoryModel[]>(this.configModel.API_URL + '/category');
  }
}
