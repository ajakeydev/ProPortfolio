import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

  // TODO: We have an issue on cell phone where when site is running and we swith between desktop mode on/off the animated text is stuck at the bottom...
  // ! Nust fix this issue...---------------------------------------------------------------------------------------------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>