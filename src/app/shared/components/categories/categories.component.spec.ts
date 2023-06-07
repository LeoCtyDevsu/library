import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriesComponent } from './categories.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { CategoryService } from '../../services/category.service';
import { jest } from '@jest/globals';
import { By } from '@angular/platform-browser';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';
import { click } from '../../helpers/testing.helper';

describe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;
  const mockCategoryModel = {
    id: 1,
    description: 'mockdata',
  };
  const mockCategoryService = {
    listCategories: jest.fn(() => [mockCategoryModel, mockCategoryModel]),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesComponent],
      providers: [
        HttpClient,
        HttpHandler,
        MockProvider(CategoryService, {
          listCategories: jest.fn(() => of([mockCategoryModel, mockCategoryModel]))
        })
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;
    component.selectedCategory = [1, 2, 3];
    fixture.detectChanges();
  });

  it('create', () => {
    expect(component).toBeTruthy();
  });

  it('input params', () => {
    const { debugElement } = fixture;
    const checkboxsCategory = debugElement.queryAll(
      By.css('[data-testid="checkbox-category"]')
    );
    expect(checkboxsCategory.length).toBe(2);
  });

  it('click event', () => {
    const { debugElement } = fixture;
    const checkboxsCategory = debugElement.queryAll(
      By.css('[data-testid="checkbox-category"]')
    );
    let mockId: number;
    component.onClickEvent.subscribe((res) => {
      mockId = res;
    });
    checkboxsCategory[0].triggerEventHandler('click', {target:{value: 1}});
    fixture.detectChanges();
  });
});
