import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { AuthenticationRequest } from '../../../gs-api/src/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.scss'
})
export class PageLoginComponent implements OnInit{

  authenticationRequest:AuthenticationRequest = {};
  errorMessage = '';

  constructor(private userService: UserService, private router: Router){}

  ngOnInit(): void {
  }

  login() {
    //console.log('authenticationRequest_PageLoginComponent = ', JSON.stringify(this.authenticationRequest));
    this.userService.login(this.authenticationRequest).subscribe(data => {
      this.userService.setAccessToken(data);
      this.getUserByEmail();
      this.router.navigate(['']);
    }, error => {
      //debugger;
      this.errorMessage = error.error.message;
      //this.router.navigate(['inscrire']); partie29 min14
    });
  }

  getUserByEmail(): void {
    this.userService.getUserByEmail(this.authenticationRequest.login)
    .subscribe(user => {
      this.userService.setConnectedUser(user);
    });
  }
}
