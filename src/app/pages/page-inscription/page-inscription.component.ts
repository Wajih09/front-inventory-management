import { Component } from '@angular/core';
import { AdresseDto, AuthenticationRequest, EntrepriseDto } from '../../../gs-api/src/models';
import { EntrepriseService } from '../../services/entreprise/entreprise.service';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';
import { userInfo } from 'os';

@Component({
  selector: 'app-page-inscription',
  templateUrl: './page-inscription.component.html',
  styleUrl: './page-inscription.component.scss'
})
export class PageInscriptionComponent {
  entrepriseDto: EntrepriseDto = {};
  adresse: AdresseDto = {};
  errorsMsg: Array<String> = [];
  errorMessage = '';

  constructor(private entrepriseService: EntrepriseService, private userService:UserService, private router: Router) {

  }

  sinscrire() {
    this.entrepriseDto.adresse=this.adresse; //p30min8 to resolve html error expl : [(ngModel)]="entrepriseDto.adresse?.ville"
    this.entrepriseService.sinscrire(this.entrepriseDto)
      .subscribe(dto => {
        this.connectEntreprise();
      },
        error => {
          //debugger;
          this.errorsMsg = error.error.errors || ['An unknown error occurred'];
        });
  }

  connectEntreprise(){
    //let connectedUser = {}; no need fo it
    const authenticationRequest: AuthenticationRequest = {
      login: this.entrepriseDto.email,
      password : 'ini/iALpAssw0rd'
    }
    this.userService.login(authenticationRequest).subscribe(authResp =>{
      this.userService.setAccessToken(authResp);
      // nearly correct ! firstly extract it in an other method. this.userService.setConnectedUser(directely data no need for connectedUser);
      // this.userService.fetchUserInfos(this.entrepriseDto.email) this.entrepriseDto.email or authenticationRequest.login
      // .subscribe(data => {
      //   connectedUser = data;
      // });
      //this.userService.setConnectedUser(connectedUser);
      this.fetchUserInfos(authenticationRequest.login);
      this.router.navigate(['changermotdepasse']);
    }, error =>{
      this.errorMessage = error.error.message;
    });
  }

  fetchUserInfos(email?:string){
    this.userService.fetchUserInfos(email)
    .subscribe(userInfos => {
      this.userService.setConnectedUser(userInfos);
    });
  }
}
