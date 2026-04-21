import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './initComponents/header/header';
import { MenuDrawer } from './initComponents/menu-drawer/menu-drawer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    MenuDrawer
],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  constructor(

  ) { }
}
