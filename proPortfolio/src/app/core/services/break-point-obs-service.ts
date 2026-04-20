import { inject, Injectable, Signal } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class BreakPointObsService {
  public breakpointObserver = inject(BreakpointObserver);
  public isMobile: Signal<boolean>;
  public isTablet: Signal<boolean>;
  public isMobilePortrait: Signal<boolean>;

  constructor(

  ) {
      //* Convert the observable to a signal for easy template and logic access
      //* this automatically handles unsubscription when the app is destroyed
      this.isMobile = toSignal(
        this.breakpointObserver
          .observe([Breakpoints.Handset, Breakpoints.Small])
          .pipe(map((result: BreakpointState ): boolean => result.matches)),
        { initialValue: false },
      );
      this.isMobilePortrait = toSignal(
        this.breakpointObserver
          .observe([Breakpoints.HandsetPortrait])
          .pipe(map((result: BreakpointState): boolean => result.matches)),
        { initialValue: false },
      );
      this.isTablet = toSignal(
        this.breakpointObserver
        .observe([Breakpoints.Tablet, Breakpoints.TabletPortrait])
        .pipe(map((result: BreakpointState): boolean => result.matches)),
        { initialValue: false },
      );
  }
}
