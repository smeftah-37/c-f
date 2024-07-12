import { Component, ElementRef, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HorizontalScrollComponent } from './horizontal-scroll/horizontal-scroll.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { items } from './items';
import { CultureComponent } from './culture/culture.component';
@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        MenuComponent,
        HorizontalScrollComponent,
        CommonModule,
        HomeComponent,
        OurStoryComponent,
        ContactUsComponent,
        ServicesComponent,
        TranslateModule,
        CultureComponent
    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    items = items;
    
    constructor(private renderer: Renderer2, private el: ElementRef, private translate: TranslateService) {
        this.translate.setDefaultLang('en');
        this.translate.use('en');
    }

    scrollToElement(id: string): void {
        const element = this.el.nativeElement.querySelector(`#${id}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    title = 'ft_frontend';
}
