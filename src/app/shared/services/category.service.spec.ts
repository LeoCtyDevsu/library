import { TestBed } from '@angular/core/testing';

import { CategoryService } from './category.service';
import { HttpClient, HttpErrorResponse, HttpHandler } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ConfigModel } from '../models/config.model';
import { CategoryModel } from '../models/category.model';

describe('CategoryService', () => {
  let categoryService: CategoryService;
  let httpTestingController: HttpTestingController;
  let configModel: ConfigModel;
  const mockCategory: CategoryModel = {
    id: 1,
    description: 'mockCategory',
  };
  const mockCategories: CategoryModel[] = [mockCategory, mockCategory];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    categoryService = TestBed.inject(CategoryService);
    httpTestingController = TestBed.inject(HttpTestingController);
    configModel = categoryService.configModel;
  });

  it('created', () => {
    expect(categoryService).toBeTruthy();
  });

  it('list categories', () => {
    categoryService.listCategories().subscribe((res) => {
      expect(res).toEqual(mockCategories);
    });
    const url = `${configModel.API_URL}/category`;
    const req = httpTestingController.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush(mockCategories);
  });

  it('list categories fail', () => {
    const status = 500;
    const statusText = 'Internal Server Error';
    const errorMessage = 'API error';
    const url = `${configModel.API_URL}/category`;

    categoryService.listCategories().subscribe({
      next: () => fail('have failed with the 500 error'),
      error: (error: HttpErrorResponse) => {
        expect(error.status).withContext('status').toEqual(500);
        expect(error.error).withContext('message').toEqual(errorMessage);
      },
      complete: () => fail('have failed with the 500 error'),
    });
    const request = httpTestingController.expectOne(url);
    request.flush(errorMessage, { status, statusText });
  });
});
