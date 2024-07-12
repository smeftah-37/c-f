import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ScrollService } from '../scroll.service';
@Component({
  selector: 'app-our-story',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './our-story.component.html',
  styleUrl: './our-story.component.css'
})
export class OurStoryComponent implements OnInit {

  constructor(private translate: TranslateService,private scrollService: ScrollService,) { }

  ngOnInit(): void {
    // Initialize translation service, optionally set default language
    this.translate.setDefaultLang('en');
  }

  switchLanguage(language: string): void {
    this.translate.use(language);
  }
  scrollToContactUs(): void {
    this.scrollService.scrollToElement('contact-us');
  }
}
