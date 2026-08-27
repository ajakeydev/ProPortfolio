import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, computed, viewChild, ElementRef } from '@angular/core';
import { NgtArgs, beforeRender, extend } from 'angular-three';
import { gltfResource } from 'angular-three-soba/loaders';
import { NgtsEnvironment } from 'angular-three-soba/staging';

@Component({
  imports: [ NgtArgs, NgtsEnvironment ],
  selector: 'app-hellogltf',
  styleUrl: './hellogltf.scss',
  templateUrl: './hellogltf.html',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// ! The beforeRender loop below in the constructor executor field is causing approx. (3) three errors
// * Also, the .glb model is blackened (i.e., NO MATERIAL OR TEXTURE VISIBLE) =====================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
export class Hellogltf {
  modelGltf = gltfResource(() => 'helloGLTFTwoPink.glb');
  gltfModelRef = viewChild.required<ElementRef<any>>('gltfModel');
  scene = computed(() => this.modelGltf.value()?.scene);
  constructor(

  ) {
    // beforeRender(({ delta }) => {
    //   this.gltfModelRef().nativeElement.rotation.x += delta;
    //   this.gltfModelRef().nativeElement.rotation.y += delta;
    //   this.gltfModelRef().nativeElement.rotation.z += delta;
    // });
  }
}
