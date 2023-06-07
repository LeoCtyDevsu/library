import { TestBed } from '@angular/core/testing';
import { jest } from '@jest/globals';
import { ConfigService } from './config.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ConfigModel } from '../models/config.model';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('ConfigService', () => {
  let service: ConfigService;
  let httpTestingController: HttpTestingController;
  const mockConfigModel: ConfigModel = {
    API_URL: 'mockConfig',
  };
  const mockService = {
    load: jest.fn(() => mockConfigModel),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClient, HttpHandler],
    });
    service = TestBed.inject(ConfigService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('be created', () => {
    expect(service).toBeTruthy();
  });

  it('load config', () => {
    service.load();
    const url = './assets/config/config-app.json';
  });

  it('get config', () => {
    service.configSubject.next(mockConfigModel);
    const config = service.getConfig();
    expect(config).toBe(mockConfigModel);
  });
});
