import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  joke: any;
  constructor(update: SwUpdate, private data: DataService) {
    update.available.subscribe(event => {
      update.activateUpdate().then(() => document.location.reload);
    });
  }

  ngOnInit() {
    this.data.gimmeJokes().subscribe(result => {
      this.joke = result;
    });
  }
}
