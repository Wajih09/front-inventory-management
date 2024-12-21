import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService, UtilisateursService } from '../../../../gs-api/src/services';

@Component({
  selector: 'app-page-utilisateur',
  templateUrl: './page-utilisateur.component.html',
  styleUrl: './page-utilisateur.component.scss'
})
export class PageUtilisateurComponent {
  constructor(
    private router: Router
  ) { }
  
  ngOnInit(): void {
  }

  nouvelUtilisateur():void{
    this.router.navigate(['nouvelutilisateur'])
  }
}
