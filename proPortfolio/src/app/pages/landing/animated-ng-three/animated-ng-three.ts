import { Component } from '@angular/core';
import { NgtCanvas } from 'angular-three/dom'; // ? NgtCanvasImpl research how to use the html template instead of the flipping inline template ------------>>>>>>>>>>>>>>>>>>>>>>>>> 08/08/2026
import { HelloCube } from './hello-cube/hello-cube';

@Component({
  selector: 'app-animated-ng-three',
  // templateUrl: './animated-ng-three.html',
  styleUrl: './animated-ng-three.scss',
  imports: [ NgtCanvas, HelloCube ],
  template: `
    <div class="canvas-wrapper">
      <ngt-canvas style="background-color: whitesmoke;" [camera]="{ position: [0, 1, 5] }" [lookAt]="[ 0, 0, 3 ]">
        <app-hello-cube *canvasContent />
      </ngt-canvas>
    </div>
  `,
})
export class AnimatedNgThree {
  constructor() {}
}
