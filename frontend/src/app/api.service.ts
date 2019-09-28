import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
    private messages;
    private users;
    constructor( private httpClient: HttpClient) {}

    getMessages() {
        this.httpClient.get('http://localhost:3001/posts').subscribe(res => {
            console.log(res);
            this.messages = res;
        });
    }

    getUsers() {
        this.httpClient.get('http://localhost:3001/users').subscribe(res => {
            console.log(res);
            this.users = res;
        });
    }

    getProfile(id) {
        return this.httpClient.get('http://localhost:3001/profile/' + id)
    }
}
