import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { By } from '@angular/platform-browser';
import { SpinnerComponent } from 'src/app/shared/components/spinner/spinner.component';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { CategoryService } from 'src/app/shared/services/category.service';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      providers: [HttpClient, HttpHandler, CategoryService, SpinnerService],
    }).compileComponents();
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('create', () => {
    expect(component).toBeTruthy();
  });

  it('click in register button', () => {
    const { debugElement } = fixture;
    const usernameInput = debugElement.query(
      By.css('[data-testid="username-input"]')
    );
    usernameInput.nativeElement.value = 'LeoCty';
    const mailInput = debugElement.query(By.css('[data-testid="mail-input"]'));
    mailInput.nativeElement.value = 'lcarmenaty@gmail.com.';
    const passwordInput = debugElement.query(
      By.css('[data-testid="password-input"]')
    );
    passwordInput.nativeElement.value = 'Qabalah10.';
    const checkboxs = debugElement.queryAll(
      By.css('[data-testid="category-checkbox"]')
    );
    const registerButton = debugElement.query(
      By.css('[data-testid="register-button"]')
    );
    (registerButton.nativeElement as HTMLButtonElement).click();
  });
});
