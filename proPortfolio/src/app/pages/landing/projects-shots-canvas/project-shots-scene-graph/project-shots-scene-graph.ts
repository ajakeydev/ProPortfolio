import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, computed, signal, effect, input, viewChild, ElementRef } from '@angular/core';
import { NgtArgs, beforeRender, extend } from 'angular-three';
import { gltfResource, textureResource } from 'angular-three-soba/loaders';
import { NgtsEnvironment } from 'angular-three-soba/staging';
import { NgtsOrbitControls } from 'angular-three-soba/controls';
import * as THREE from 'three';

extend(THREE);

@Component({
  imports: [
    NgtArgs,
    // NgtsEnvironment, // ! NgtsEnvironment is a cdn -- beware of this as it can lead to CVE security vulnerabilities
    NgtsOrbitControls,
  ],
  selector: 'app-project-shots-scene-graph',
  styleUrl: './project-shots-scene-graph.scss',
  templateUrl: './project-shots-scene-graph.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class ProjectShotsSceneGraph {
  protected isActive = signal(false);
  protected gltfModelCarouselThis = gltfResource(() => 'carouselTwoSceneThree.glb');
  protected custUniforms = { uTime: { value: 0.0 }, uAngle: { value: 0.0 }, uActive: { value: this.isActive } };
  protected roughness = input<number>(0.33);
  protected metalness = input<number>(0.09);
  protected baseTexture = textureResource(() => 'StuccoRoughCast001_COL_2K_METALNESS.png', {
    onLoad: (texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
    }
  });
  protected normalMapStucco = textureResource(() => 'stuccoNormalMap2K.png', {
    onLoad: (texture )=> {
      // texture.flipY = false;
      texture.colorSpace = THREE.NoColorSpace;
      texture.center.set(0.5, 0.5);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
    }    
  });
  protected gltfSceneThree = computed(() => {
    const gltfDataThree = this.gltfModelCarouselThis.value();
    const textureImport = this.normalMapStucco.value();
    if (!gltfDataThree || !textureImport) return null;

    gltfDataThree.scene.traverse((child) => {
      child.castShadow = true;
      child.receiveShadow = true;
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const material = mesh.material as THREE.Material;
        if (mesh.material && 'normalMap' in mesh.material) {
          const materials = Array.isArray(mesh.material) ? mesh.material : [ mesh.material ];

          materials.forEach((mat) => {
            if ('roughness' in mat) {
              (mat as THREE.MeshStandardMaterial).roughness = this.roughness();
            }
            if ('metalness' in mat) {
              (mat as THREE.MeshStandardMaterial).metalness = this.metalness();
            }
            if ('normalMap' in mat) {
              (mat as THREE.MeshStandardMaterial).normalMap = textureImport;
            }
          });
        }
        material.needsUpdate = true;
      }
    });
    return gltfDataThree.scene;
  });
  constructor(

  ) { }
}
