import { provideRouter, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path : '' , component: HomeComponent
    }
];

export const appRoutes = provideRouter(routes) //Exportation du model de routes
