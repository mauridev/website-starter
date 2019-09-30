import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    path = 'http://localhost:3001/auth'
    constructor( private httpClient: HttpClient) {}

    registerUser(registerData) {
        this.httpClient.post(this.path + '/register', registerData, {responseType: 'text'}).subscribe(res => {
        });
    }

    loginUser(loginData) {
        let tokenRecived;
        this.httpClient.post(this.path + '/login', loginData, {responseType: 'json'}).subscribe(res => {
            tokenRecived = res;
            localStorage.setItem('token', tokenRecived.token);
        });
    }
}
