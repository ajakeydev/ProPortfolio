import { inject, Injectable, afterNextRender, Signal } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreakPointObsService {
    public isMobile: any;
    public isTablet: any;

  constructor() {
    afterNextRender((): void => {
      const breakpointObserver = inject(BreakpointObserver);

      //* Convert the observable to a signal for easy template and logic access
      //* this automatically handles unsubscription when the app is destroyed
      this.isMobile = toSignal(
        breakpointObserver
          .observe([Breakpoints.Handset, Breakpoints.Small])
          .pipe(map((result) => result.matches)),
        { initialValue: false },
      );
      this.isTablet = toSignal(
        breakpointObserver.observe(Breakpoints.Tablet).pipe(map((result) => result.matches)),
        { initialValue: false },
      );
    });
  }
}
