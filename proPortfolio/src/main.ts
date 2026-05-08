import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
// TODO: the title of the index.html in the app-root component changes to 404 not found when it should, however, it does not change back to Portfolio -- Aaron Mitchell. Should research and fix NOOP