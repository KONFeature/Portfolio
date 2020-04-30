import { Component, OnInit } from "@angular/core";
import { degrees, professionals } from "./career.data";

@Component({
  selector: "app-career",
  templateUrl: "./career.component.html",
  styleUrls: ["./career.component.scss"],
})
export class CareerComponent implements OnInit {
  degrees: any[];
  professionals: any[];

  constructor() {
    Object.assign(this, { degrees, professionals });
  }

  ngOnInit(): void {}
}
