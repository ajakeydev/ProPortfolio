import { Component, signal, Directive, HostListener, Renderer2, ElementRef } from '@angular/core';

// @Directive({
//   selector: '[appHover]',
//   standalone: true
// })

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})

export class Header {

  protected readonly headerText = signal('Test header text')

  public digits = " ";
  public cycle = " ";
  public forDate = " ";
  public date = new Date();

  public theta: number = 0.01
  public mat2 = [
    Math.cos(this.theta), Math.sin(this.theta),
    -Math.sin(this.theta), Math.cos(this.theta)
  ]

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  // TODO: need to manipulate font-size and stuff without causing header height to change with it... ============================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  @HostListener('mousenter') onEnter(): void {
    this.renderer.setStyle(this.el.nativeElement, 'font-size', '2rem');
  }

  @HostListener('mouseleave') onLeave(): void {
    
  }

}
