import { Component, ElementRef, viewChild, Signal, inject, signal, input } from '@angular/core';
import { BreakPointObsService } from '../../../core/services/break-point-obs-service';

@Component({
  selector: 'app-menu-drawer',
  imports: [],
  templateUrl: './menu-drawer.html',
  styleUrl: './menu-drawer.scss',
  styles: [
    `
      .menuDrawer {
        transition: 0.66s;
        background-color: blue;
        width: 75%;
        height: 90%;
        z-index: 1000;
      }
    `
  ]
})
export class MenuDrawer {

  isDrawerOpen = signal(false);
  menuDrawer: Signal<ElementRef<any> | undefined> = viewChild<ElementRef>('.menuDrawer');

  constructor(

  ) { }

  toggleMenuDrawer(): void {
    this.isDrawerOpen.set(!this.isDrawerOpen());
    console.log(this.isDrawerOpen());
  }
}
