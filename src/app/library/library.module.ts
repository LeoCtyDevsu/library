import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutingModule } from './library-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { CreateBookComponent } from './components/create-book/create-book.component';
import { DetailBookComponent } from './components/detail-book/detail-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyBooksComponent } from './components/my-books/my-books.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CreateBookComponent,
    DetailBookComponent,
    MyBooksComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    LibraryRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LibraryModule { }
