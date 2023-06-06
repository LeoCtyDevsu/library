import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Subject, takeUntil } from 'rxjs';
import { CategoryModel } from '../../models/category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit, OnDestroy {
  @Input() selectedCategory: number[] = [];
  @Output() onClickEvent: EventEmitter<number> = new EventEmitter();
  categories: CategoryModel[] = [];
  private ngUnsubscribe = new Subject<void>();

  constructor(private _categoryService: CategoryService) {}

  ngOnInit(): void {
    this.fetchCategories();
  }

  ngOnDestroy(): void {
    this.unSubscribeAll();
  }

  unSubscribeAll() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  fetchCategories() {
    this._categoryService
      .listCategories()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((res) => {
        this.categories = [...res];
      });
  }

  onClickEventNotification(id: number) {
    this.onClickEvent.emit(id);
  }

  isChecked(id: number) {
    return this.selectedCategory.includes(id);
  }
}
