// import { Injectable, inject } from '@angular/core';
// import { BreakpointObserver, Breakpoints, BreakpointState  } from '@angular/cdk/layout';
// import { toSignal } from '@angular/core/rxjs-interop';
// import { map } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class BreakPointObsService {
//   private breakPointObserver = inject(BreakpointObserver);

//   //* Convert the observable to a signal for easy template and logic access
//   //* this automatically handles unsubscription when the app is destroyed
//   public isMobile = toSignal(
//     this.breakPointObserver.observe([ Breakpoints.Handset, Breakpoints.Small ]).pipe(
//       map(result  => result.matches)
//     ),
//     { initialValue: false }
//   );
//   public isTablet = toSignal(
//     this.breakPointObserver.observe(Breakpoints.Tablet).pipe(
//       map(result => result.matches)
//     ),
//     { initialValue: false }
//   );
// }
