import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriesComponent } from './categories.component';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('CategoriesComponent', () => {
  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesComponent],
      providers: [HttpClient, HttpHandler]
    }).compileComponents();
    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('create', () => {
    expect(component).toBeTruthy();
  });
});
