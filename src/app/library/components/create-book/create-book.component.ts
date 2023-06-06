import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { minCheckValidator } from 'src/app/shared/custom-validators/min-check.validator';
import { CategoryModel } from 'src/app/shared/models/category.model';
import { CategoryService } from 'src/app/shared/services/category.service';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { BookService } from '../../services/book.service';
import { BookModel } from 'src/app/shared/models/book.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss'],
})
export class CreateBookComponent implements OnInit, OnDestroy {
  book: BookModel = {};
  bookForm: FormGroup;
  categoriesForm = new FormGroup({});
  categories: CategoryModel[] = [];
  categoriesSelected: number[] = [];
  patternUrl =
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
  private ngUnsubscribe = new Subject<void>();
  private ngUnsubscribeBook = new Subject<void>();

  constructor(
    private _categoryService: CategoryService,
    private _bookService: BookService,
    private _spinnerService: SpinnerService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.bookForm = new FormGroup({
      title: new FormControl<string | null>(null, [Validators.required]),
      author: new FormControl<string | null>(null, [Validators.required]),
      resume: new FormControl<string | null>(null),
      image: new FormControl<string | null>(null, [
        Validators.required,
        Validators.pattern(this.patternUrl),
      ]),
      url: new FormControl<string | null>(null, [
        Validators.required,
        Validators.pattern(this.patternUrl),
      ]),
      public: new FormControl<boolean>(false),
    });
  }

  ngOnInit(): void {
    this._categoryService
      .listCategories()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((res) => {
        this.categories = [...res];
      });
    this.checkBook();
    this.checkCategories();
  }

  ngOnDestroy(): void {
    this.unsubscribeAll();
  }

  unsubscribeAll() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
    this.ngUnsubscribeBook.next();
    this.ngUnsubscribeBook.complete();
  }

  checkBook() {
    this.book = this._route.snapshot.data['book'];
    if (this.book) {
      this.bookForm.patchValue({
        title: this.book.title,
        author: this.book.author,
        resume: this.book.resume,
        image: this.book.image,
        url: this.book.url,
        public: this.book.public,
      });
    }
  }

  checkCategories() {
    if (this.book) {
      this.categoriesSelected = [...(this.book.category ?? [])];
    }
  }

  selectPublic() {
    const value = this.bookForm.get('public')?.value as boolean;
    this.bookForm.get('public')?.setValue(!value);
  }

  registerBook() {
    this._spinnerService.show();
    const book: BookModel = this.bookForm.value;
    book.category = this.categoriesSelected;
    this._bookService
      .registerBook(book)
      .pipe(takeUntil(this.ngUnsubscribeBook))
      .subscribe((res) => {
        this._spinnerService.hide();
        this._router.navigate(['/admin/books']);
      });
  }

  getTitleControlErrors() {
    const titleControl = this.bookForm.get('title');
    return titleControl?.dirty ? titleControl?.errors : null;
  }

  getAuthorControlErrors() {
    const authorControl = this.bookForm.get('author');
    return authorControl?.dirty ? authorControl?.errors : null;
  }

  getURLControlErrors() {
    const urlControl = this.bookForm.get('url');
    return urlControl?.dirty ? urlControl?.errors : null;
  }

  categorySelected(id: number) {
    const indexOf = this.categoriesSelected.indexOf(id);
    if (indexOf < 0) {
      this.categoriesSelected.push(id);
    } else {
      this.categoriesSelected.splice(indexOf, 1);
    }
  }
}
