import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
    private messages;
    private users;
    path = "http://localhost:3001"
    constructor( private httpClient: HttpClient) {}

    getMessages(userId) {
        this.httpClient.get(this.path + '/posts/' + userId).subscribe(res => {
            console.log(res);
            this.messages = res;
        });
    }

    postMessages(message) {
        this.httpClient.post(this.path + '/post', message, {responseType: 'text'}).subscribe(res => {
        });
    }

    getUsers() {
        this.httpClient.get(this.path + '/users').subscribe(res => {
            console.log(res);
            this.users = res;
        });
    }

    getProfile(id) {
        return this.httpClient.get(this.path + '/profile/' + id)
    }
}
