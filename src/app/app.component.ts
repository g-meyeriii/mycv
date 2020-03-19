import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mycv';
  personal: string = "George|1234 Main St Florence KY 23456|513-333-4444";
  h3Color: string= "blue";
  mainColor: string= "green";
  tech: string= "Git/GitHub SQL C# EF MVC WebApi Html Css JavaScript jQuery Typescript Anglar";
  workHist1:string="";
  workHist2:string="";
  education1:string="";
  education2:string="";
}
