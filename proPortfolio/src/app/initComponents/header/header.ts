import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  protected readonly headerText = signal('Test header text')

  public digits = " ";
  public cycle = " ";
  public forDate = " ";
  public date = new Date();

  constructor(

  ) { }

}
