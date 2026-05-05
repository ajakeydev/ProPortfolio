import { Component, ElementRef, viewChild, Signal, inject, signal, output } from '@angular/core';
import { BreakPointObsService } from '../../../core/services/break-point-obs-service';
import { RouterLink } from "@angular/router";
import { Header } from '../header';
import { HEADER_LINKS } from '../../../core/constants/app.constants';
import { ASIDE_MENUDRAWER_LINKS } from '../../../core/constants/app_MenuDrawer';
import { MenuDrawerAsideDynamicDataI } from '../../../core/interfaces/menu-drawer-aside-dynamic-data-i';


@Component({
  selector: 'app-menu-drawer',
  imports: [ RouterLink ],
  templateUrl: './menu-drawer.html',
  styleUrl: './menu-drawer.scss',
  styles: [
    `
      .menuDrawer {
        display: flex;
        flex-direction: column;
        background-color: oklch(1 0 0);
        // padding: 0.5rem;
        width: 75%;
        height: 100%;
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
  // asideMenuDrawerLinks = ASIDE_MENUDRAWER_LINKS.testingFillerText;
  asideMenuDrawerLinks: MenuDrawerAsideDynamicDataI;

  // TODO: Let's fetch data VIA an API using MenuDrawerAsideDynamicDataI to get the menu-drawer component poppin'

  constructor(

  ) {
    this.asideMenuDrawerLinks = {
      city: 'Your City',
      country: 'COUNTRY',
      date: new Date(),
      image: 'menuPancakes01.ico',
      temperature: 72,
      description: 'partly cloudy'
    } as MenuDrawerAsideDynamicDataI
  }

  toggleMenuDrawer(): void {
    this.isDrawerOpen.set(!this.isDrawerOpen());
  }

  modifyBurgerMenu(event: Event): void {
    this.hamActionTriggered.emit(event);
  }
}
