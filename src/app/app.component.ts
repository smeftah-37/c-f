import { Component, ElementRef, importProvidersFrom, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HorizontalScrollComponent } from './horizontal-scroll/horizontal-scroll.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { items } from './items';
import { OurStoryComponent } from './our-story/our-story.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MenuComponent,HorizontalScrollComponent,CommonModule,HomeComponent,OurStoryComponent,ContactUsComponent,ServicesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items = items;
  
  constructor(private renderer: Renderer2, private el: ElementRef) { }

    scrollToElement(id: string): void {
        const element = this.el.nativeElement.querySelector(`#${id}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
  title = 'ft_frontend';
}
