import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankComponent } from './blank.component';

describe('BlankComponent', () => {
  let component: BlankComponent;
  let fixture: ComponentFixture<BlankComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlankComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(BlankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('create', () => {
    expect(component).toBeTruthy();
  });
});
