import { Component, ElementRef, viewChild, Signal, inject, afterNextRender } from '@angular/core';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { BreakPointObsService } from '../../core/services/break-point-obs-service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    
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
        font-size: 1.72rem;
      }
      .homeLink {
        font-size: 1.8rem;
        transition: 00.25s;
        color: oklch(81.48% 0.08 225.75);
        border-radius: 10%;
        box-shadow: 0.2px 0.2px 0.2px 0px rgba(0, 0, 0, 0.75);
        text-decoration: none;
      }
      :active {
        transition: 0s;
        color: oklch(0.452 0.313214 264.052);
        font-size: 1.72rem;
        box-shadow: none;
      }
      // @media only screen and (max-width: 887px), (min-width: 674) {
      //   a {
      //     display: none;
      //   }
      // }
      // @if (responsive.isMobile()) {
      //   nav {
      //     display: none;
      //   }
      // }
    `,
  ],
})
export class Header {
  
  // public responsive = inject(BreakPointObsService);
  public responsive = inject(BreakpointObserver);
  isHovered = false;
  isClicked = false;
  homeText: Signal<ElementRef<any> | undefined> = viewChild<ElementRef>('.homeLink');

  constructor(
  ) {
    this.logger();
  }

  logger(): void {
    // console.log(this.responsive);
  }
}
