import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  template: `
        <mat-card>
          <mat-card-header>
            <mat-card-title>
                <h4>Register New User</h4>
            </mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <form>
              <mat-form-field>
                <input matInput placeholder="Email" type="email">
              </mat-form-field>
              <mat-form-field>
                <input matInput placeholder="Password" type="password">
              </mat-form-field>
              <button mat-raised-button color="primary">Register</button>
            </form>
          </mat-card-content>
        </mat-card>
  `
})
export class RegisterComponent {
}
