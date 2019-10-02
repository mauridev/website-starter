import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {
  constructor( private authService: AuthService) {}
  registerData = {};

  post() {
    console.log(this.registerData);
    this.authService.registerUser(this.registerData);
  }
}
