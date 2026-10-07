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
    NgtsEnvironment,
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
  private meshRef = viewChild.required<ElementRef<THREE.Mesh>>('mesh');
  private materialRef = viewChild.required<ElementRef<THREE.ShaderMaterial>>('material');
  // protected gltfModel = gltfResource(() => 'carouselPlanesOne.glb');
  protected custUniforms = { uTime: { value: 0.0 }, uAngle: { value: 0.0 }, uActive: { value: this.isActive } };
  protected roughness = input<number>(0.1);
  protected metalness = input<number>(0.5);
  protected baseTexture = textureResource(() => 'StuccoRoughCast001_COL_2K_METALNESS.png', {
    onLoad: (texture) => {
      texture.colorSpace = THREE.NoColorSpace;
    }
  });
  protected normalMapStucco = textureResource(() => 'stuccoNormalMap2K.png', {
    onLoad: (texture )=> {
      // texture.flipY = false;
      texture.colorSpace = THREE.NoColorSpace;
      // texture.center.set(0.5, 0.5);
      // texture.wrapS = THREE.RepeatWrapping;
      // texture.wrapT = THREE.RepeatWrapping;
    }
    
  });
  constructor(

  ) {
    beforeRender(({ delta }) => {
      this.meshRef().nativeElement.rotation.y += delta/ 2.0;
      // this.meshRef().nativeElement.rotation.x += delta;
      this.meshRef().nativeElement.rotation.z += delta/ 2.0;
    });
  }
}
