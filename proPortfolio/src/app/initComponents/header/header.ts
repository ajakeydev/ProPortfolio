import { Component, ElementRef, viewChild, Signal, inject, signal } from '@angular/core';
import { BreakPointObsService } from '../../core/services/break-point-obs-service';
import { NgClass } from '@angular/common';
import { HEADER_LINKS } from '../../core/constants/app.constants';
import { MenuDrawer } from './menu-drawer/menu-drawer';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  styles: [
    `
      a {
        font-family:
          system-ui,
          -apple-system,
          BlinkMacSystemFont,
          'Segoe UI',
          Roboto,
          Oxygen,
          Ubuntu,
          Cantarell,
          'Open Sans',
          'Helvetica Neue',
          sans-serif;
        color: oklch(0.2881 0.1436 272.76);
        text-decoration: none;
        font-size: 1.25rem;
      }
      .homeLink {
        transition: 00.25s;
        color: oklch(81.48% 0.08 225.75);
        height: 3rem;
        font-size: 1.3rem;
        display: flex;
        align-items: center;
        border-radius: 10%;
        text-decoration: none;
      }
      .aboutMeLink {
        transition: 00.25s;
        color: oklch(81.48% 0.08 225.75);
        height: 3rem;
        font-size: 1.3rem;
        display: flex;
        align-items: center;
        border-radius: 10%;
        text-decoration: none;
      }
      .socialsLink {
        transition: 00.25s;
        color: oklch(81.48% 0.08 225.75);
        height: 3rem;
        font-size: 1.3rem;
        display: flex;
        align-items: center;
        border-radius: 10%;
        text-decoration: none;
      }
      :active {
        transition: 0s;
        color: oklch(0.452 0.313214 264.052);
        font-size: 1.27rem;
      }
      :visited {
        color: oklch(0.452 0.313214 264.052);
        font-size: 1.27rem;
        
      }
      // @media only screen and (max-width: 887px), (min-width: 674) {
      //   a {
      //     display: none;
      //   }
      // }
    `,
  ],
})
export class Header {

  private callMenuComponent = new MenuDrawer();
  isMenuDrawerOpen = this.callMenuComponent.isDrawerOpen;
  
  public responsive = inject(BreakPointObsService);
  isHomeHovered = false;
  isHomeClicked = false;
  isHomeVisited = false;
  isAboutMeHovered = false;
  isAboutMeClicked = false;
  isAboutMeVisited = false;
  isSocialsHovered = false;
  isSocialsClicked = false;
  isSocialsVisited = false;
  homeLinkText = HEADER_LINKS.homeLinkText;
  aboutLinkText = HEADER_LINKS.aboutLinkText;
  socialsLinkText = HEADER_LINKS.socialsLinkText;
  homeText: Signal<ElementRef<any> | undefined> = viewChild<ElementRef>('.homeLink');
  aboutMeText: Signal<ElementRef<any> | undefined> = viewChild<ElementRef>('.aboutMeLink');
  socialsText: Signal<ElementRef<any> | undefined> = viewChild<ElementRef>('.socialsLink');

  constructor(
  ) { }

  // TODO: need to implement RxJS or some mechanism to disable the link that gets clicked after routing displays the component to prevent spam clicking the links
  disableLinkOnClick(): void { }

  toggleDrawer(): void {
    this.callMenuComponent.toggleMenuDrawer();
    console.log(this.isMenuDrawerOpen());
  }

  logger(): void {
  }
}
