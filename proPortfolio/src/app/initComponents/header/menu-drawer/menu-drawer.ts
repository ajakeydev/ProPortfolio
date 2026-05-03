import { Component, ElementRef, viewChild, Signal, inject, signal, output } from '@angular/core';
import { BreakPointObsService } from '../../../core/services/break-point-obs-service';
import { RouterLink } from "@angular/router";
import { Header } from '../header';
import { HEADER_LINKS } from '../../../core/constants/app.constants';

@Component({
  selector: 'app-menu-drawer',
  imports: [RouterLink],
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
  hamActionTriggered = output<Event>();
  homeLinkText = HEADER_LINKS.homeLinkText;
  aboutLinkText = HEADER_LINKS.aboutLinkText;
  socialsLinkText = HEADER_LINKS.socialsLinkText;

  constructor(

  ) { }

  toggleMenuDrawer(): void {
    this.isDrawerOpen.set(!this.isDrawerOpen());
  }

  modifyBurgerMenu(event: Event): void {
    this.hamActionTriggered.emit(event);
  }
}
