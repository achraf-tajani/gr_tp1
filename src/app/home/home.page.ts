import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isShow = false;
  constructor() {}
  start(){
    this.isShow = !this.isShow;
  }
}
