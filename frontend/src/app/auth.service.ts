import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    path = 'http://localhost:3001/auth'
    constructor( private httpClient: HttpClient) {}

    registerUser(registerData) {
        this.httpClient.post(this.path + '/register', registerData).subscribe(res => {
        });
    }

    loginUser(loginData) {
        this.httpClient.post<any>(this.path + '/login', loginData).subscribe(res => {
            console.log(res);
            localStorage.setItem('token', res.token);
        });
    }
}
