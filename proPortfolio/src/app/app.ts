import { Component, ElementRef, signal, Renderer2, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './initComponents/header/header';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit {
  protected readonly title = signal(
    "Great Landing!!!",
  );
  animPlaceHolder: any;
  screenWidth: number;
  screenHeight: number;
  _x: number;
  _y: number;
  _dx: number;
  _dy: number;

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) {
    this.animPlaceHolder = this.el.nativeElement.querySelector('.animPlaceHolder');
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this._x = 0;
    this._y = 0;
    this._dx = 2;
    this._dy = 2;
    this._Init();
  }

  ngAfterViewInit() {
    const animPlaceHolder = this.el.nativeElement.querySelector('.animPlaceHolder');

    this.renderer.setStyle(animPlaceHolder, 'margin-left', '20px');
  }

  logger(): void { }

  _Init(): void {
    this._RAF();
  }

  _RAF(): void {
    this._x += this._dx;
    this._y += this._dy;

    requestAnimationFrame((): void => {
      this._RAF();
    });
    console.log(this._x);
  }
}
