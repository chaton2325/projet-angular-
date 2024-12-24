import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { EmployeService, Employe } from '../employe.service'; // Import du service et de l'interface

@Component({
  standalone: true,
  selector: 'app-employe-form',
  templateUrl: './employe-form.component.html',
  styleUrls: ['./employe-form.component.css'],
  imports: [FormsModule, RouterModule] // Import FormsModule pour [(ngModel)] et RouterModule pour la navigation
})

export class EmployeFormComponent {
  employe: Employe = {
    id: 0, // ID sera généré automatiquement par le backend si applicable
    nom: '',
    prenom: '',
    email: '',
    dateEmbauche: '' // Date d'embauche au format ISO (YYYY-MM-DD)
  };

  constructor(private employeService: EmployeService, private router: Router) {}

  // Méthode pour valider et ajouter un employé
  validateEmploye() {
    console.log('Tentative d’ajout d’un employé :', this.employe);

    // Appel à l'API backend via EmployeService
    this.employeService.addEmploye(this.employe).subscribe({
      next: (response) => {
        console.log('Employé ajouté avec succès :', response);
        alert('Employé ajouté avec succès !');
        this.resetForm(); // Réinitialiser le formulaire après succès
        this.router.navigate(['/home']); // Redirige vers la page d'accueil ou une autre page
      },
      error: (err) => {
        console.error('Erreur lors de l’ajout de l’employé :', err);
        alert('Erreur lors de l’ajout de l’employé.');
      }
    });
  }

  // Réinitialiser le formulaire
  resetForm() {
    this.employe = {
      id: 0,
      nom: '',
      prenom: '',
      email: '',
      dateEmbauche: ''
    };
  }
}
