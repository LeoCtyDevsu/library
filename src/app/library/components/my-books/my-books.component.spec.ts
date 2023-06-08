import { ComponentFixture, TestBed } from '@angular/core/testing';
import { jest } from '@jest/globals';
import { MyBooksComponent } from './my-books.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MockProvider } from 'ng-mocks';
import { BookService } from '../../services/book.service';
import { BookModel } from 'src/app/shared/models/book.model';
import { of } from 'rxjs';
import { CategoryModel } from 'src/app/shared/models/category.model';
import { CategoryService } from 'src/app/shared/services/category.service';

describe('MyBooksComponent', () => {
  let component: MyBooksComponent;
  let fixture: ComponentFixture<MyBooksComponent>;
  let categoryService: CategoryService;
  let bookService: BookService;
  const mockBook: BookModel = {
    id: 'c2738hrvs8n',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    resume:
      'Noted software expert Robert C. Martin, presents a revolutionary paradigm with Clean Code: A Handbook of Agile Software Craftsmanship. Martin, who has helped bring agile principles from a practitioner’s point of view to tens of thousands of programmers, has teamed up with his colleagues from Object Mentor to distill their best agile practice of cleaning code “on the fly” into a book that will instill within you the values of software craftsman, and make you a better programmer―but only if you work at it.',
    image:
      'https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
    url: 'https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882',
    public: true,
    category: [57, 38, 32, 52],
    userRegister: '722hwc5cj',
  };
  const mockCategory: CategoryModel = {
    id: 1,
    description: 'MockData',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyBooksComponent],
      providers: [
        HttpClient,
        HttpHandler,
        MockProvider(BookService, {
          listBooks: jest.fn(() => of([mockBook, mockBook])),
        }),
        MockProvider(CategoryService, {
          listCategories: jest.fn(() => of([mockCategory, mockCategory])),
        }),
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(MyBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    categoryService = TestBed.inject(CategoryService);
    bookService = TestBed.inject(BookService);
  });

  it('create', () => {
    expect(component).toBeTruthy();
  });

  it('load catagories', () => {
    categoryService.listCategories().subscribe(res => {
      expect(res).toBe([mockCategory, mockCategory]);
    });
  });

  it('load books', () => {
    bookService.listBooks().subscribe(res => {
      expect(res).toBe([mockBook, mockBook]);
    });
  });
});
