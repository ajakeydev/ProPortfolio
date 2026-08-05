import {
  Component,
  ElementRef,
  signal,
  Renderer2,
  AfterViewInit,
  HostListener,
  ChangeDetectionStrategy,
} from '@angular/core';
// import { NgtCanvas } from 'angular-three/dom';
// import { AnimatedNgThree } from './animated-ng-three/animated-ng-three';
// import { canvasRootInitializer } from 'angular-three';

@Component({
  selector: 'app-landing',
  imports: [
    // NgtCanvas,
    // AnimatedNgThree,
  ],
  templateUrl: './landing.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './landing.scss',
})
export class Landing implements AfterViewInit {
  protected readonly title = signal('Great Landing!!!');
  animPlaceHolder: ElementRef<any>;
  screenWidth: number;
  screenHeight: number;
  _x: number;
  _y: number;
  _dx: number;
  _dy: number;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    
  ) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this._x = 0;
    this._y = 0;
    this._dx = 4;
    this._dy = 4;
    this._Init();
  }

  ngAfterViewInit(): void {
    this.animPlaceHolder = this.el.nativeElement.querySelector('.animPlaceHolder');
  }

  @HostListener('window:resize', ['$event'])
  onresize(event: Event): void {
    this.screenWidth = (event.target as Window).innerWidth;
    this.screenHeight = (event.target as Window).innerHeight;
    setTimeout((): void => {
      this.setX(1);
      this.setY(1);
    }, 100);
  }

  _Init(): void {
    setTimeout(() => {
      this._RAF();
    }, 100);
  }

  _RAF(): void {
    this._x += this._dx;
    this._y += this._dy;

    requestAnimationFrame((): void => {
      if (this._x + 240 >= this.screenWidth || this._x <= 0) {
        this._dx *= -1;
      }
      if (this._y + 175 >= this.screenHeight || this._y <= 0) {
        this._dy *= -1;
      }

      this.renderer.setStyle(this.animPlaceHolder, 'margin-left', `${this._x}px`);
      this.renderer.setStyle(this.animPlaceHolder, 'margin-top', `${this._y}px`);

      this._RAF();
    });
  }

  setX(startPos: number): void {
    this._x = startPos;
  }
  setY(startPos: number): void {
    this._y = startPos;
  }

  logger(): void {
    console.log(this.screenWidth);
  }
}
