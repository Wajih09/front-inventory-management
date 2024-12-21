import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nouvel-utilisateur',
  templateUrl: './nouvel-utilisateur.component.html',
  styleUrl: './nouvel-utilisateur.component.scss'
})
export class NouvelUtilisateurComponent {
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void { }

  saveClick(): void {
  }

  cancelClick(): void {
    this.router.navigate([`utilisateurs`])
  }
}
