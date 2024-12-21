import { Injectable } from '@angular/core';
import { AuthenticationService, UtilisateursService } from '../../../gs-api/src/services';
import { AuthenticationRequest, AuthenticationResponse, ChangerMotDePasseUtilisateurDto, UtilisateurDto } from '../../../gs-api/src/models';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private authenticationService: AuthenticationService,
    private utilisateurService: UtilisateursService,
    private router: Router
  ) { }

  login(authenticationRequest: AuthenticationRequest):Observable<AuthenticationResponse> {
    console.log('authenticationRequest_userService = ', JSON.stringify(authenticationRequest));
    return this.authenticationService.authenticate(authenticationRequest)
  }

  getUserByEmail(email?: string): Observable<UtilisateurDto> {
    if (email !== undefined) {
      return this.utilisateurService.findByEmail(email);
    }
    return of();
  }

  setAccessToken(authenticationResponse:AuthenticationResponse){
    localStorage.setItem('accessToken', JSON.stringify(authenticationResponse));
  }

  setConnectedUser(utilisateurDto:UtilisateurDto){
    localStorage.setItem('connectedUser', JSON.stringify(utilisateurDto));
  }

  getConnectedUser():UtilisateurDto{
    //return JSON.parse(localStorage.getItem('connectedUser') as string); personal shot
    if (localStorage.getItem('connectedUser')) {
      return JSON.parse(localStorage.getItem('connectedUser') as string);
    }
    return {};
  }

  fetchUserInfos(email?:string):Observable<UtilisateurDto>{
    if (email !== undefined) return this.utilisateurService.findByEmail(email);
    //return this.utilisateurService.findByEmail('emailRandom'); personal shot
    return of(); //empty object
  }

  isUserLoggedAndAccessTokenValid():boolean{
    if(localStorage.getItem('accessToken')){
      //TODO we need to verify the validity of access token
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

  changerMotDePasse(changerMotDePasseUtilisateurDto:ChangerMotDePasseUtilisateurDto):Observable<UtilisateurDto>{
    return this.utilisateurService.changerMotDePasse(changerMotDePasseUtilisateurDto);

  }
}
