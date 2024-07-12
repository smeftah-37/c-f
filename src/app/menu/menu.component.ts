import { Component,Renderer2, ElementRef, OnInit } from '@angular/core';
import { ScrollService } from '../scroll.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit  {

  isNavbarCollapsed = true;
  currentLang: string;

  constructor(private translate: TranslateService,private scrollService: ScrollService, private renderer: Renderer2, private el: ElementRef) {
    this.currentLang = this.translate.currentLang || 'en';

  }

  scrollToOurHistory(): void {
    this.scrollService.scrollToElement('our-history');
  }
  toggleNavbar(): void {
    const navbarCollapse = this.el.nativeElement.querySelector('.navbar-nav');
    if (navbarCollapse.classList.contains('open')) {
      navbarCollapse.classList.remove('open');
    } else {
      navbarCollapse.classList.add('open');
    }
  }
    ngOnInit(): void {
    this.translate.setDefaultLang('en'); // Set default language
  }

  switchLanguage(language: string): void {
    this.translate.use(language);
    this.currentLang = language; // Update current language displayed
  }

  scrollToContactUs(): void {
    this.scrollService.scrollToElement('contact-us');
  }
  scrollToServices(): void {
    this.scrollService.scrollToElement('services');
  }  scrollToProject(): void {
    this.scrollService.scrollToElement('projects');
  }  scrollToCultur(): void {
    this.scrollService.scrollToElement('cultur');
  }
}
