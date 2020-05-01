import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { LazyLoadImageModule } from "ng-lazyload-image";

import { AppRoutingModule } from "./app-routing.module";
import { ProjectComponent } from "./projects/project/project.component";
import { SkillsComponent } from "./skills/skills.component";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { ProjectsComponent } from "./projects/projects.component";
import { CareerComponent } from "./career/career.component";
import { DegreeComponent } from "./career/degree/degree.component";
import { ProfessionalComponent } from "./career/professional/professional.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    ProjectsComponent,
    SkillsComponent,
    ProjectComponent,
    CareerComponent,
    DegreeComponent,
    ProfessionalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    NgxChartsModule,
    FontAwesomeModule,
    LazyLoadImageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
