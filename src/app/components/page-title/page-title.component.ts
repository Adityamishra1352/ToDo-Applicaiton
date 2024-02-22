import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-page-title',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './page-title.component.html',
  styles: ''
})
export class PageTitleComponent {
  dateNow=new Date();
}
