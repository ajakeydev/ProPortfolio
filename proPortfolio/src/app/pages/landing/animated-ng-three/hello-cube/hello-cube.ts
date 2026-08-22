import { Component, CUSTOM_ELEMENTS_SCHEMA, viewChild, ElementRef } from '@angular/core';
// import { NgtsEnvironment } from 'angular-three-soba/staging';
import { extend, NgtArgs, beforeRender } from 'angular-three';
import * as THREE from 'three';
import { __values } from 'tslib';

const vertexShader = /* glsl */`
  uniform float uTime;
  uniform float uRadius;

  float getDelta() {
    return ((sin(uTime) + 1.0) / 2.0);
  }

  varying vec2 vUv;
  void main() {
    float delta = getDelta();
    vec3 v = normalize(position) * uRadius;
    vec3 pos = mix(position, v, delta);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = /* glsl */`
  uniform float uTime;
  varying vec2 vUv;
  void main() {
    // Generate a simple animated gradient based on time
    vec3 color = 0.5 + 0.5 * cos(uTime + vUv.xyx + vec3(0, 2, 4));
    gl_FragColor = vec4(color, 1.0);
  }
`;

extend(THREE);

@Component({
  selector: 'app-hello-cube',
  imports: [ NgtArgs ],
  templateUrl: './hello-cube.html',
  styleUrl: './hello-cube.scss',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class HelloCube {
  private meshRef = viewChild.required<ElementRef<THREE.Mesh>>('mesh')
  private materialRef = viewChild.required<ElementRef<THREE.ShaderMaterial>>('material')
  protected vertexShader = vertexShader;
  protected fragmentShader = fragmentShader;
  protected uniforms = {
    uTime: { value: 0.0 },
    uRadius: { value: 0.75 },
  };
  constructor(

  ) {
    beforeRender(({ delta }) => {

      this.materialRef().nativeElement.uniforms['uTime'].value += delta.valueOf();

      this.meshRef().nativeElement.rotation.y += delta;
      this.meshRef().nativeElement.rotation.x += delta;
      this.meshRef().nativeElement.rotation.z += delta;
    });
  }

  logger(x: any): void {
    
  }
}
