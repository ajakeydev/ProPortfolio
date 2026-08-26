import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, computed } from '@angular/core';
import { NgtArgs } from 'angular-three';
import { gltfResource } from 'angular-three-soba/loaders';

@Component({
  imports: [ NgtArgs ],
  selector: 'app-hellogltf',
  styleUrl: './hellogltf.scss',
  templateUrl: './hellogltf.html',
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// ! NOT SEEING THE GLTF MODEL ----------------------------------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>08/25/2026>>>>>>>>>>>>>>>>>>>
export class Hellogltf {
  modelGltf = gltfResource(() => 'helloGLTF.glb');
  scene = computed(() => this.modelGltf.value()?.scene);
  constructor(

  ) { }
}
