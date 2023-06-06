import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBooksComponent } from './my-books.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('MyBooksComponent', () => {
  let component: MyBooksComponent;
  let fixture: ComponentFixture<MyBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyBooksComponent],
      providers: [HttpClient, HttpHandler]
    }).compileComponents();
    fixture = TestBed.createComponent(MyBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('create', () => {
    expect(component).toBeTruthy();
  });
});
