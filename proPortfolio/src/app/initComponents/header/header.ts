import { Element } from '@angular/compiler';
import { Component, signal, HostListener, Renderer2, ElementRef, ChangeDetectorRef, viewChild, Signal, ViewEncapsulation } from '@angular/core';
import { NgClass } from '@angular/common';

// @Directive({
//   selector: '[appHover]',
//   standalone: true
// })

@Component({
  selector: 'app-header',
  imports: [
    NgClass,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  styles: [`
    a { font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: oklch(0.2881 0.1436 272.76);
        text-decoration: none;
        font-size: 1.72rem; }
    .homeLink { font-size: 1.8rem; transition: 00.25s; color: oklch(81.48% 0.08 225.75); border-radius: 10%; box-shadow: 0.2px 0.2px 0.2px 0px rgba(0,0,0,0.75); text-decoration: none; }
    :active { 
        transition: 0s;
        color: oklch(0.452 0.313214 264.052);
        font-size: 1.72rem;
        box-shadow: none;
     }
    `]
  // encapsulation: ViewEncapsulation.None
})

export class Header {

  isHovered = false;
  isClicked = false;
  homeText: Signal<ElementRef<any> | undefined> = viewChild<ElementRef>('.homeLink');
  _tempTitle: Element;
  _tempH1Title: Element;
  _x: number;
  _y: number;
  _dY: number;
  _dX: number;
  _windowHeight: number;
  _windowWidth: number;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef
  ) {
    this._x = 0;
    this._y = 0;
    this._dY = 2;
    this._dX = 2;
    this._InitTitle();
  }

  // @HostListener('mousenter') onEnter(): void {

  //   // this.homeText.style.transition = '0.25s';
  //   // this.homeText.style.color = 'oklch(81.48% 0.08 225.75)';
  //   // this.homeText.style.fontSize = '1.77rem';
  //   // this.homeText.style.borderRadius = '10%';
  //   // this.homeText.style.boxShadow = '0.2px 0.2px 0.2px 0px rgba(0,0,0,0.75)';

  //   this.renderer.setStyle(this.el.nativeElement, 'transition', '0.25s');
  //   this.renderer.setStyle(this.el.nativeElement, 'color', 'red !important'); // oklch(81.48% 0.08 225.75)
  //   this.renderer.setStyle(this.el.nativeElement, 'font-size', '1.77rem'); // 1.77rem
  //   this.renderer.setStyle(this.el.nativeElement, 'border-radius', '10%');
  //   this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '0.2px 0.2px 0.2px 0px rgba(0,0,0,0.75)');

  //   this.cdr.detectChanges();
  // }

  // @HostListener('mouseleave') onLeave(): void {
    
  // }
  // @HostListener('mousedown') onDown(): void {

  // }
  _InitTitle(): void {

  }

}
