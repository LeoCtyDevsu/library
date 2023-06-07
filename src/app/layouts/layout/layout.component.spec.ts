import { ComponentFixture, TestBed } from '@angular/core/testing';
import { jest } from '@jest/globals';
import { LayoutComponent } from './layout.component';
import { UserService } from 'src/app/shared/services/user.service';
import { MockProvider } from 'ng-mocks';
import { UserModel } from './../../shared/models/user.model';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;
  const mockUser: UserModel = {
    userId: 'mockData',
    name: 'mockData',
    username: 'mockData',
    email: 'mockData',
    password: 'mockData',
    category: [1, 2, 3],
    accessToken: 'mockData',
    tokenType: 'mockData',
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LayoutComponent],
      providers: [
        MockProvider(UserService, {
          getUser: jest.fn(() => mockUser),
        }),
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('create', () => {
    expect(component).toBeTruthy();
  });
});
