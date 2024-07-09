import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.handleDynamicHeight();
    window.addEventListener('resize', this.handleDynamicHeight.bind(this));
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleDynamicHeight(): void {
    const objectWidth = this.objectRef.nativeElement.scrollWidth;
    const dynamicHeight = this.calcDynamicHeight(objectWidth);
    this.dynamicHeight = dynamicHeight;
  }

  calcDynamicHeight(objectWidth: number): number {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    return objectWidth - vw + vh + 150;
  }

  handleScroll(): void {
    const offsetTop = -this.containerRef.nativeElement.offsetTop;
    this.translateX = offsetTop;
  }
}
