import { Component } from '@angular/core';
import { ScrollService } from '../scroll.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor(private scrollService: ScrollService) {}

  scrollToOurHistory(): void {
    this.scrollService.scrollToElement('our-history');
  }
  scrollToContactUs(): void {
    this.scrollService.scrollToElement('contact-us');
  }
}
