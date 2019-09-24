import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MEAN STACK';

  constructor( private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getMessages();
  }

}
