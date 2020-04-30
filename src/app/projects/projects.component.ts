import { Component, OnInit } from '@angular/core';
import { projects } from './projects.data';

@Component({
  selector: 'app-projects',
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent implements OnInit {
  projects: any[];

  constructor() {
    Object.assign(this, { projects });
  }

  ngOnInit(): void {
  }

}
