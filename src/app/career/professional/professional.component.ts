import { Component, OnInit, Input } from "@angular/core";
import { PicturesService } from "src/app/services/pictures.service";
import { Professional } from "./professional";
import { LangService } from "src/app/services/lang.service";

@Component({
  selector: "professional",
  templateUrl: "./professional.component.html",
})
export class ProfessionalComponent implements OnInit {
  @Input()
  professional: Professional;

  constructor(
    public picturesService: PicturesService,
    public langService: LangService
  ) {}

  ngOnInit(): void {}
}
