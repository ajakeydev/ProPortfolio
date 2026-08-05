import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { extend } from 'angular-three';
import * as THREE from 'three';

extend(THREE);

@Component({
  selector: 'app-animated-ng-three',
  templateUrl: './animated-ng-three.html',
  styleUrl: './animated-ng-three.scss',
  // template: `
  //   <ngt-ambientLight [options]="{ intensity: 0.5 }" />

  //   <ngt-mesh>
  //     <ngt-boxGeometry />
  //     <ngt-mesStandardMaterial [options]="{ color: 'darkorange' }" />
  //   </ngt-mesh>
  // `,
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AnimatedNgThree {
  constructor(
  ) { }
}
