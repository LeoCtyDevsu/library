import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SigninComponent } from './signin.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { By } from '@angular/platform-browser';

describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigninComponent],
      providers: [HttpClient, HttpHandler],
    }).compileComponents();
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('create', () => {
    expect(component).toBeTruthy();
  });

  it('input for username', () => {
    const { debugElement } = fixture;
    const usernameInput = debugElement.query(
      By.css('[data-testid="username-input"]')
    );
    usernameInput.nativeElement.value = 'LeoCty';
    expect(usernameInput.nativeElement.value).toBe('LeoCty');
  });

  it('input for password', () => {
    const { debugElement } = fixture;
    const passwordInput = debugElement.query(
      By.css('[data-testid="password-input"]')
    );
    passwordInput.nativeElement.value = 'Qabalah10.';
    expect(passwordInput.nativeElement.value).toBe('Qabalah10.');
  });

  it('click in signin button', () => {
    const { debugElement } = fixture;
    const usernameInput = debugElement.query(
      By.css('[data-testid="username-input"]')
    );
    usernameInput.nativeElement.value = 'LeoCty';
    const passwordInput = debugElement.query(
      By.css('[data-testid="password-input"]')
    );
    passwordInput.nativeElement.value = 'Qabalah10.';
    const signinButton = debugElement.query(
      By.css('[data-testid="signin-button"]')
    );
    (signinButton.nativeElement as HTMLButtonElement).click();
    // expect(passwordInput.nativeElement.value).toBe('Qabalah10.');
  });

  it('signin button disabled', () => {
    const { debugElement } = fixture;
    const usernameInput = debugElement.query(
      By.css('[data-testid="username-input"]')
    );
    usernameInput.nativeElement.value = 'asd';
    const passwordInput = debugElement.query(
      By.css('[data-testid="password-input"]')
    );
    passwordInput.nativeElement.value = 'asd';
    const signinButton = debugElement.query(
      By.css('[data-testid="signin-button"]')
    );
    const state = (signinButton.nativeElement as HTMLButtonElement).disabled;
    expect(state).toBe(true);
  });
});
