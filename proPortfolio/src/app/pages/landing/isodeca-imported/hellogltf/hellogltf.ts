import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, computed, signal, effect } from '@angular/core';
import { NgtArgs, beforeRender, extend } from 'angular-three';
import { gltfResource } from 'angular-three-soba/loaders';
import { NgtsEnvironment } from 'angular-three-soba/staging';
import * as THREE from 'three';

extend(THREE);

@Component({
  imports: [ NgtArgs, NgtsEnvironment ],
  selector: 'app-hellogltf',
  styleUrl: './hellogltf.scss',
  templateUrl: './hellogltf.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
// ! The beforeRender loop below in the constructor executor field is causing approx. (3) three errors
export class Hellogltf {
  protected uniforms = {
    uTime: { value: 0.0 },
    uAngle: { value: 0.0 },
  }
  protected gltfModel = gltfResource(() => 'helloGLTFTwoPink.glb');
  protected gltfScene = computed(() => {
    const gltfData = this.gltfModel.value();
    if (!gltfData) return null;

    gltfData.scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const material = mesh.material as THREE.Material;

        material.onBeforeCompile = (shader) => {
          shader.uniforms['uTime'] = this.uniforms.uTime;
          shader.uniforms['uAngle'] = this.uniforms.uAngle;

          shader.vertexShader = shader.vertexShader.replace(
            '#include <common>',

            /* glsl */ `
              #include <common>
              uniform float uTime;
              uniform float uAngle;
            `
          );
          // ! Terrible: need to fix lighting issue with the normals but working on the lighting issue
          shader.vertexShader = shader.vertexShader.replace(
            '#include <begin_vertex>',
            /* glsl */ `
              #include <begin_vertex>
              float c = cos(uAngle);
              float s = sin(uAngle);

              // rotate around Z in local space 
              vec4 rotX = vec4(c, s, 0.0, 0.0);
              vec4 rotY = vec4(-s, c, 0.0, 0.0);
              vec4 rotZ = vec4(0.0, 0.0, 1.0, 0.0);

              mat3 rotMat = mat3(rotX.xyz, rotY.xyz, rotZ.xyz);
              transformed = rotMat * normal * transformed;

              // transformed.y += sin(transformed.x * 2.0 + uTime) * 0.5;
            `
          );
        }; // line 33
        material.needsUpdate = true;
      }
    }); // line 28
    return gltfData.scene;
  }); // line 24
  constructor (

  ) {
    beforeRender(({ clock }) => {
      this.uniforms.uTime.value = clock.getElapsedTime();
      this.uniforms.uAngle.value = clock.getElapsedTime();
    });
  }
}
