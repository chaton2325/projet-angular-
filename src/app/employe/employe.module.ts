import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeFormComponent } from './employe-form/employe-form.component';

@NgModule({
  declarations: [EmployeFormComponent], // Déclarer le composant ici
  imports: [
    CommonModule,
    FormsModule, // Assurez-vous que FormsModule est inclus
  ],
  exports: [EmployeFormComponent], // Si ce composant est utilisé ailleurs
})
export class EmployeModule {}
