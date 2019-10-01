import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*Components */
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MessageComponent } from './messages.component';
import { RegisterComponent } from './register.component';
import { LoginComponent } from './login.component';
import { UsersComponent } from './users.component';
import { ProfileComponent } from './profile.component';
import { PostComponent } from './post.component';


/*Services */
import { ApiService } from './api.service';
import { AuthService } from './auth.service';
import { AuthinterceptorService } from './authinterceptor.service';

/*Material Modules */
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    RegisterComponent,
    LoginComponent,
    UsersComponent,
    ProfileComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatListModule
  ],
  providers: [
    ApiService,
    AuthService,
    { 
      provide: HTTP_INTERCEPTORS,
      useClass: AuthinterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
