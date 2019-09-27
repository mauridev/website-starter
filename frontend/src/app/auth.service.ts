import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    constructor( private httpClient: HttpClient) {}

    registerUser(registerData) {
        this.httpClient.post('http://localhost:3001/register', registerData, {responseType: 'text'}).subscribe(res => {
        });
    }

    loginUser(loginData) {
        let tokenRecived;
        this.httpClient.post('http://localhost:3001/login', loginData, {responseType: 'json'}).subscribe(res => {
            tokenRecived = res;
            localStorage.setItem('token', tokenRecived.token);
        });
    }
}
