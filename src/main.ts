import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';

// Bootstrapping de l'application avec la configuration
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
