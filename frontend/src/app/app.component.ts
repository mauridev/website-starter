import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar>
      {{title}}
      
      <span style="flex: 1 1 auto"></span>
      <button mat-button routerLink="/users"> Users </button>
      <button mat-button routerLink="/register"> Register </button>
    </mat-toolbar>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'Starter Full Stack Web';
}
