import { Component, OnInit, Input } from "@angular/core";
import { Degree } from "./degree";
import { PicturesService } from "src/app/services/pictures.service";
import { LangService } from "src/app/services/lang.service";

@Component({
  selector: "degree",
  templateUrl: "./degree.component.html",
})
export class DegreeComponent implements OnInit {
  @Input()
  degree: Degree;

  constructor(
    public picturesService: PicturesService,
    public langService: LangService
  ) {}

  ngOnInit(): void {}
}
