import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  workExperiences: any=[
    {
      company: "Cent-Roll Products",
      job: "Production Manager",
      time: "2013-2020",
      values: [
        "Started Safety Curriculum",
        "Enhanced the Quality System"
      ]
    },
    {
      company: "Naval Special Operations",
      job: "Team Chief / OCONUS Operations Chief",
      time: "2010-2013",
      values: [
        "Trained 12 man operational team",
        "Passed Operational Readiness first attempt"
      ]
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
