import { Component } from '@angular/core';
import { NgtCanvas } from 'angular-three/dom';
import { ProjectShotsSceneGraph } from './project-shots-scene-graph/project-shots-scene-graph';

@Component({
  imports: [ NgtCanvas, ProjectShotsSceneGraph ],
  selector: 'app-projects-shots-canvas',
  styleUrl: './projects-shots-canvas.scss',
  templateUrl: './projects-shots-canvas.html',
})
export class ProjectsShotsCanvas {
  aProperty: string = 'flipping property';
  constructor(

  ) { }
}
