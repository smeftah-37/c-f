import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    this.translate.setDefaultLang('en'); // Set default language
  }

}
