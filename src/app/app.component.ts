import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  description: string = 'Three components';
  name:string ="George Meyer";
  address: string ="1234 Main Street";
  city: string ="Florence";
  state:string="KY";
  zip: string = "45214";
  email: string ="gjmiii9@gmail.com";
  phone: string = "513.867.5309";
}
