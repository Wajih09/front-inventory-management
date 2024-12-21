import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EntrepriseService } from '../../../services/entreprise/entreprise.service';
import { ChangerMotDePasseUtilisateurDto } from '../../../../gs-api/src/models';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-changer-mot-de-passe',
  templateUrl: './changer-mot-de-passe.component.html',
  styleUrl: './changer-mot-de-passe.component.scss'
})
export class ChangerMotDePasseComponent {
  changerMotDePasse: ChangerMotDePasseUtilisateurDto = {};
  //initialMotDePasse: string = localStorage.getItem('connectedUser')?.motDePasse?;
  initialMotDePasse = 'ini/iALpAssw0rd';
  constructor(
    private router: Router,
    private articleFromEntrepriseTest:EntrepriseService,
    private userService:UserService
  ) { }

  ngOnInit(): void { 
    this.articleFromEntrepriseTest.findAll().subscribe(data=>{});
    //TODO if localStorage.getItem('origin') ....
  }

  saveClick(): void {
    this.changerMotDePasse.id = this.userService.getConnectedUser().id;
    this.userService.changerMotDePasse(this.changerMotDePasse).subscribe(data=>{
      //this.router.navigate([`profil`]);
      this.navigate(`profil`);
    });
  }

  cancelClick(): void {
    //this.router.navigate([`profil`]);
    this.navigate(`profil`);
  }

  navigate(path:string){
    this.router.navigate([path]);
  }
}
