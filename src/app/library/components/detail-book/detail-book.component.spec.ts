import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailBookComponent } from './detail-book.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { BookModel } from 'src/app/shared/models/book.model';

describe('DetailBookComponent', () => {
  let component: DetailBookComponent;
  let fixture: ComponentFixture<DetailBookComponent>;
  const fakeActivatedRoute = {
    snapshot: {
      data: {
        book: {
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
        } as BookModel,
      },
    },
  } as unknown as ActivatedRoute;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailBookComponent],
      providers: [
        HttpClient,
        HttpHandler,
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(DetailBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('create', () => {
    expect(component).toBeTruthy();
  });
});
