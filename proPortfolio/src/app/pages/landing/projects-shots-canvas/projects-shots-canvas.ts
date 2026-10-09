import { Component, signal, computed, input } from '@angular/core';
import { gltfResource, textureResource } from 'angular-three-soba/loaders';
import { NgtArgs, extend } from 'angular-three';
import { NgtCanvas } from 'angular-three/dom';
import { ProjectShotsSceneGraph } from './project-shots-scene-graph/project-shots-scene-graph';
import * as THREE from 'three';

extend(THREE);

@Component({
  imports: [ NgtCanvas, ProjectShotsSceneGraph ],
  selector: 'app-projects-shots-canvas',
  styleUrl: './projects-shots-canvas.scss',
  templateUrl: './projects-shots-canvas.html',
})
export class ProjectsShotsCanvas {

  constructor(

  ) { }
}
