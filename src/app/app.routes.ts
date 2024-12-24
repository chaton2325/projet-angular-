import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeFormComponent } from './employe/employe-form/employe-form.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent // Route pour la page d'accueil
    },
    {
        path: 'employe',
        component: EmployeFormComponent // Route pour le formulaire d'employé
    }
];
