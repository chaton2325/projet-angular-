import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {appRoutes} from './app/app.routes' //Appel de la route dans le fichier principal

//Fichier principal

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

