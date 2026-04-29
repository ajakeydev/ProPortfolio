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
        background-color: oklch(1 0 0);
        padding: 0.5rem;
        width: 75%;
        height: 90%;
        color: oklch(0 0 0);
      }
      @keyframes slide-from-left {
        from { transform: translateX(-100%); }
        to { transform: translateX(0); }
      }
      .slide-enter {
        animation: slide-from-left 0.3s ease-in-out;
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
  }
}
