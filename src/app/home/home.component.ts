import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import {
  faGithub,
  faLinkedin,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { ProjectsComponent } from "../projects/projects.component";
import { SkillsComponent } from "../skills/skills.component";
import { CareerComponent } from "../career/career.component";
import { HomeElementsService } from "../services/home-elements.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  @ViewChild(ProjectsComponent, { read: ElementRef })
  private projectsElementRef: ElementRef;
  @ViewChild(SkillsComponent, { read: ElementRef })
  private skillsElementRef: ElementRef;
  @ViewChild(CareerComponent, { read: ElementRef })
  private careerElementRef: ElementRef;

  constructor(
    private library: FaIconLibrary,
    private homeElementService: HomeElementsService
  ) {
    this.library.addIcons(faGithub, faLinkedin, faGooglePlay, faFilePdf);
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    // Backup all the element in the home component service
    this.homeElementService.projectsElement = this.projectsElementRef.nativeElement;
    this.homeElementService.skillsElement = this.skillsElementRef.nativeElement;
    this.homeElementService.careerElement = this.careerElementRef.nativeElement;
  }
}
