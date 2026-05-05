import { Component, ElementRef, viewChild, Signal, inject, signal, Renderer2, AfterViewInit, HostListener } from '@angular/core';
import { BreakPointObsService } from '../../core/services/break-point-obs-service';
import { NgClass } from '@angular/common';
import { HEADER_LINKS } from '../../core/constants/app.constants';
import { MenuDrawer } from './menu-drawer/menu-drawer';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass,
    MenuDrawer
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
        color: oklch(0.452 0.313214 264.052);
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
export class Header implements AfterViewInit {
  
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
  hamburgerMenu: ElementRef<any>;

  constructor(
    private render2: Renderer2,
    private el: ElementRef
  ) { }

  ngAfterViewInit(): void {
    this.hamburgerMenu = this.el.nativeElement.querySelector('.menu');
  }

  // TODO: Temporary fix will reload the page when the hamburger menu is added to DOM because the child component menu-drawer does NOT have access to the span > button classList when screen is...
  // TODO: ...resized.
  @HostListener('window:resize', ['$event'])
  onresize(event: Event): void {
    if (this.responsive.isMobile() == true) {
      (event.target as Window).location.reload();
    }
  }

  // TODO: need to implement RxJS or some mechanism to disable the link that gets clicked after routing displays the component to prevent spam clicking the links
  // disableLinkOnClick(): void { }

  modifyHamburgerClass(): void {
    this.render2.removeClass(this.hamburgerMenu, 'opened');
    this.render2.setAttribute(this.hamburgerMenu, 'aria-expanded', 'false');
    // this.logger();
    
  }

  logger(): void {
    // console.log('action triggered from parent class');
  }
}
