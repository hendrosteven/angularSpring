import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Hendro';
  listName: string[] = [];

  constructor(){
    this.listName.push(this.name);
  }

  sayHello(){
    this.listName.push(this.name);
  }
}
