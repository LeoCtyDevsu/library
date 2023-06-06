import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { SelectComponent } from './components/select/select.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { RouterModule } from '@angular/router';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LabelDescriptionComponent } from './components/label-description/label-description.component';
import { CategoriesComponent } from './components/categories/categories.component';

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    CheckboxComponent,
    SelectComponent,
    ImageGalleryComponent,
    TextAreaComponent,
    SpinnerComponent,
    LabelDescriptionComponent,
    CategoriesComponent,
  ],
  imports: [CommonModule, RouterModule, HttpClientModule],
  exports: [
    InputComponent,
    ButtonComponent,
    CheckboxComponent,
    SelectComponent,
    ImageGalleryComponent,
    TextAreaComponent,
    SpinnerComponent,
    LabelDescriptionComponent,
    CategoriesComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}
