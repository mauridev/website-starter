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
}
