import { Component, OnInit, HostListener } from "@angular/core";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { main, secondary } from "./skills.data";
import { LangService } from "../services/lang.service";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
})
export class SkillsComponent implements OnInit {
  // Skills data
  main: any[];
  secondary: any[];

  // Formatting axes for the skills charts
  yAxisTickFormattingFn = this.yAxisTickFormatting.bind(this);

  // Variables to display the graph
  showLegend: boolean;
  barPadding: number;

  constructor(private langService: LangService) {
    Object.assign(this, { main, secondary });
  }

  ngOnInit(): void {
    // Calculate the graph and position we want
    this.calculateGraphVariables(window.innerWidth);
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    // Calculate the graph and position we want
    this.calculateGraphVariables(window.innerWidth);
  }

  calculateGraphVariables(width: number) {
    if (width > 600) {
      // If on desktop
      this.showLegend = true;
      this.barPadding = 32;
    } else {
      // If on mobile
      this.showLegend = false;
      this.barPadding = 8;
    }
  }

  /**
   * Formatte the Y Axis of the different skills charts
   * @param value The value required to be formatted
   */
  yAxisTickFormatting(value) {
    switch (value) {
      case 20:
        return $localize`:@@app.skills.basic:Basic`;
      case 40:
        return $localize`:@@app.skills.medium:Medium`;
      case 60:
        return $localize`:@@app.skills.proficient:Proficient`;
      case 80:
        return $localize`:@@app.skills.realgood:Really good`;
      case 100:
        return $localize`:@@app.skills.expert:Expert`;
      default:
        return;
    }
  }

  /**
   * Convert a skill value to a skill string
   * @param value The value to be converted to a string
   */
  getStringFromValue(value) {
    if (value < 40)
      return $localize`:@@app.skills.basic.desc:Basic: only used on one or two project`;
    else if (value < 60)
      return $localize`:@@app.skills.medium.desc:Medium: basis ok but a bit more learning wouldn't be so bad`;
    else if (value < 80)
      return $localize`:@@app.skills.proficient.desc:Proficient: stackoverflow rarely used`;
    else if (value < 100)
      return $localize`:@@app.skills.realgood.desc:Really good: Lot of project done with it, I can argue of all the pros and cons of different implementation, and I understand them`;
    else if (value >= 100)
      return $localize`:@@app.skills.expert.desc:Expert: complete understanding, teaching it and continious technology watch`;
  }

  /**
   * Retreive the extra for the specified lang
   * @param model The model from wich we eant the extra
   */
  getExtraForLang(model: any): string {
    return this.langService.extractRightText(model.extra);
  }
}
