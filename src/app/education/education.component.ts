import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  schools: any[]=[
    {
    school: "Coastline Community College",
    degree: "Associates Small Business Managment",
    year: "2013"
    },
    {
      school: "Scott High School",
      degree: "High School Diploma",
      year: "1995"
      },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
