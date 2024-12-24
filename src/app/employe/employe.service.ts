import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface Employe {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  dateEmbauche: string; // Format ISO : "YYYY-MM-DD"
}

@Injectable({
  providedIn: 'root',
})
export class EmployeService {
  private apiUrl = 'http://localhost:5258/api/employe';

  constructor(private http: HttpClient) {}

  /**
   * Ajouter un employé
   * @param employe - Les données de l'employé à ajouter
   * @returns Un Observable contenant l'employé ajouté
   */
  addEmploye(employe: Employe): Observable<Employe> {
    return this.http.post<Employe>(this.apiUrl, employe).pipe(
      map((response) => {
        console.log('Réponse du backend :', response);
        return response;
      }),
      catchError(this.handleError)
    );
  }

  /**
   * Gérer les erreurs HTTP
   * @param error - L'erreur retournée par HttpClient
   * @returns Un Observable contenant l'erreur formatée
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      // Erreur côté client ou réseau
      console.error('Une erreur côté client ou réseau est survenue :', error.error.message);
    } else {
      // Erreur retournée par le backend
      console.error(
        `Erreur retournée par le backend : Code ${error.status}, ` +
        `Message : ${error.message}`
      );
    }
    return throwError(() => new Error('Une erreur est survenue, veuillez réessayer plus tard.'));
  }
}
