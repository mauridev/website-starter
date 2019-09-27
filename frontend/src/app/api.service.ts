import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
    messages;
    constructor( private httpClient: HttpClient) {}

    getMessages() {
        this.httpClient.get('http://localhost:3001/posts').subscribe(res => {
            console.log(res);
            this.messages = res;
        });
    }

    sendUserRegistration(registerData) {
        this.httpClient.post('http://localhost:3001/register', registerData, {responseType: 'text'}).subscribe(res => {
        });
    }

    loginUser(loginData) {
        this.httpClient.post('http://localhost:3001/login', loginData, {responseType: 'text'}).subscribe(res => {
        });
    }
}
