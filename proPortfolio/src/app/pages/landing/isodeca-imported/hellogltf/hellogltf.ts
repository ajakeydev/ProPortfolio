import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, computed, signal, effect } from '@angular/core';
import { NgtArgs, beforeRender, extend } from 'angular-three';
import { gltfResource } from 'angular-three-soba/loaders';
import { NgtsEnvironment } from 'angular-three-soba/staging';
import * as THREE from 'three';

extend(THREE);

const uniforms = {
  uTime: { value: 0.0 },
  uAngle: { value: 0.0 },
};

@Component({
  imports: [ NgtArgs, NgtsEnvironment ],
  selector: 'app-hellogltf',
  styleUrl: './hellogltf.scss',
  templateUrl: './hellogltf.html',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// ! The beforeRender loop below in the constructor executor field is causing approx. (3) three errors
export class Hellogltf {
  protected uniforms = {
    uTime: { value: 0.0 },
    uAngle: { value: 0.0 },
  }
  gltfScene = signal<THREE.Group | null>(null);
  constructor (

  ) { }
}
