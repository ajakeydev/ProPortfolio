import { Component, CUSTOM_ELEMENTS_SCHEMA, viewChild, ElementRef } from '@angular/core';
import { extend, NgtArgs, beforeRender } from 'angular-three';
import * as THREE from 'three';

extend(THREE);

@Component({
  selector: 'app-hello-cube',
  imports: [ NgtArgs ],
  templateUrl: './hello-cube.html',
  styleUrl: './hello-cube.scss',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class HelloCube {
  private meshRef = viewChild.required<ElementRef<THREE.Mesh>>('mesh');
  constructor(

  ) {
    beforeRender(({ delta }) => {
      this.meshRef().nativeElement.rotation.y += delta;
      this.meshRef().nativeElement.rotation.x += delta;
      this.meshRef().nativeElement.rotation.z += delta;
    });
  }
}
