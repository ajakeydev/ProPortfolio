import { inject, Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class BreakPointObsService {
  public breakpointObserver = inject(BreakpointObserver);
  public isMobile: any;
  public isTablet: any;

  constructor(

  ) {
      //* Convert the observable to a signal for easy template and logic access
      //* this automatically handles unsubscription when the app is destroyed
      this.isMobile = toSignal(
        this.breakpointObserver
          .observe([Breakpoints.Handset, Breakpoints.Small, Breakpoints.HandsetPortrait])
          .pipe(map((result: BreakpointState ) => result.matches)),
        { initialValue: false },
      );
      this.isTablet = toSignal(
        this.breakpointObserver
        .observe([Breakpoints.Tablet, Breakpoints.TabletPortrait])
        .pipe(map((result: BreakpointState) => result.matches)),
        { initialValue: false },
      );
  }
}
