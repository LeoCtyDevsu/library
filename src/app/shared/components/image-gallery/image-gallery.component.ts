import { Component, Input } from '@angular/core';
import { BookModel } from '../../models/book.model';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss'],
})
export class ImageGalleryComponent {
  @Input() elements: BookModel[] = [];
  @Input() columns: string = 'col-3';
}
