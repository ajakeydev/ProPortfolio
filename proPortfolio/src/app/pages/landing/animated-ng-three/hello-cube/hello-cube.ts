import { Component, CUSTOM_ELEMENTS_SCHEMA, viewChild, ElementRef } from '@angular/core';
import { NgtsEnvironment } from 'angular-three-soba/staging';
import { extend, NgtArgs, beforeRender } from 'angular-three';
import * as THREE from 'three';
import { __values } from 'tslib';

const morphShaderMats = new THREE.ShaderMaterial({
  uniforms: {
    uTime: { value: 0 },
    uProgress: { value: 0 },
  },
  vertexShader: /* glsl */ `
    uniform float uTime;
    uniform float uProgress;
    varying vec2 vUv;

    void main() {
      vUV = uv;
      // spin position slightly
      vec3 pos = position;

      // Interpolate from cube vertex to normalized spere/circle vertex
      vec3 normalizedDir = normalize(position);
      vec3 morphedPos = mix(pos, normalizedDir * 1.5, uProgress);

      gl_Position = projectionMatrix * modelViewMatrix * vec4(morphedPos, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    varying vec2 vUv;
    uniform float uProgress;

    void main() {
      vec3 col = mix(vec3(0.0, 1.0, 0.8), vec3(1.0, 0.2, 0.6), uProgress);
      gl_FragColor = vec4(col, 0.9);
    }
  `,
  wireframe: true,
});

extend(THREE);

@Component({
  selector: 'app-hello-cube',
  imports: [ NgtArgs, NgtsEnvironment ],
  templateUrl: './hello-cube.html',
  styleUrl: './hello-cube.scss',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class HelloCube {
  private meshRef = viewChild.required<ElementRef<THREE.Mesh>>('mesh')
  constructor(

  ) {
    beforeRender(({ delta }) => {
      const elapsed = delta.valueOf();

      this.meshRef().nativeElement.rotation.y += delta;
      this.meshRef().nativeElement.rotation.x += delta;
      this.meshRef().nativeElement.rotation.z += delta;
    });
  }
}
