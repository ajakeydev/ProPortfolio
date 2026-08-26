import { Component } from '@angular/core';
import { NgtCanvas } from 'angular-three/dom';
import { Hellogltf } from './hellogltf/hellogltf';

@Component({
  imports: [ NgtCanvas, Hellogltf ],
  selector: 'app-isodeca-imported',
  styleUrl: './isodeca-imported.scss',
  templateUrl: './isodeca-imported.html',
})
export class IsodecaImported {}
