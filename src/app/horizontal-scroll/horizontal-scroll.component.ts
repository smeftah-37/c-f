import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, HostListener, ElementRef, ViewChild, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-horizontal-scroll',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './horizontal-scroll.component.html',
  styleUrls: ['./horizontal-scroll.component.css']
})
export class HorizontalScrollComponent implements OnInit, AfterViewInit {
  dynamicHeight: number | null = null;
  translateX = 0;

  @ViewChild('containerRef') containerRef!: ElementRef;
  @ViewChild('objectRef') objectRef!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
        this.handleDynamicHeight();
        window.addEventListener('resize', this.handleDynamicHeight.bind(this));
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }
  }

  handleDynamicHeight(): void {
    if (isPlatformBrowser(this.platformId)) {
        const objectWidth = this.objectRef.nativeElement.scrollWidth;
        const dynamicHeight = this.calcDynamicHeight(objectWidth);
        this.dynamicHeight = dynamicHeight;
    }
  }

  calcDynamicHeight(objectWidth: number): number {
    if (isPlatformBrowser(this.platformId)) {
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        return objectWidth - vw + vh + 150;
    }
    return 0; // Fallback value if not in the browser
  }

  handleScroll(): void {
    if (isPlatformBrowser(this.platformId)) {
        const offsetTop = -this.containerRef.nativeElement.offsetTop;
        this.translateX = offsetTop;
    }
  }
}
