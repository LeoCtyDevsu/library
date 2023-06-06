import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BookModel } from 'src/app/shared/models/book.model';
import { ConfigModel } from 'src/app/shared/models/config.model';
import { ConfigService } from 'src/app/shared/services/config.service';
import { UserService } from 'src/app/shared/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  configModel: ConfigModel = {};

  constructor(
    private _httpClient: HttpClient,
    private _configService: ConfigService,
    private _userService: UserService
  ) {
    this.configModel = this._configService.getConfig();
  }

  listBooks(): Observable<BookModel[]> {
    return this._httpClient.get<BookModel[]>(
      this.configModel.API_URL + '/books/owner'
    );
  }

  getBook(id: string): Observable<BookModel> {
    return this._httpClient
      .get(this.configModel.API_URL + '/books/owner')
      .pipe(map((res: any) => res.find((book: any) => book.id === id)));
  }

  registerBook(book: BookModel) {
    return this._httpClient.post(
      this.configModel.API_URL + '/books/owner',
      book
    );
  }
}
