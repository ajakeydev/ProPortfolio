import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal(
    "Aaron's A.K.A. ajakeydev's portfolio is under construction. Thank you for visiting! 🥰",
  );

  public digits = " ";
  public cycle = " ";
  public forDate = " ";
  public date = new Date();

  constructor(

  ) {
    // this.logger(this.date)
  }

  logger(x: any): void {
    console.log(x)
  }
}
