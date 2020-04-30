import {
  Component,
  OnInit,
  HostListener,
  ElementRef,
  ViewChild,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from "@angular/core";
import { getBrowserLang } from "@locl/core";
import { HomeElementsService } from "../services/home-elements.service";
import { LangService } from "../services/lang.service";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent implements OnInit {
  // Current element ref, used to calculate offset
  @ViewChild("navbar")
  private currentElementRef: ElementRef;

  // Is the top menu collapsed ?
  public isMenuCollapsed = true;

  // Offset to apply on the element position
  public pageOffset: number;

  // Activate or not the av button
  public homeActive = true;
  public projectsActive = false;
  public skillsActive = false;
  public careerActive = false;

  constructor(
    private homeElementService: HomeElementsService,
    private langService: LangService,
    private changeDetection: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    // Calculate the offset to apply on page scroll
    this.pageOffset = this.currentElementRef.nativeElement.offsetHeight;
    this.changeDetection.detectChanges;
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event) {
    // Check if nav element are active or not
    const projectPos =
      this.homeElementService.projectsElement.getBoundingClientRect().y -
      this.pageOffset -
      1;
    const skillsPos =
      this.homeElementService.skillsElement.getBoundingClientRect().y -
      this.pageOffset -
      1;
    const careerPos =
      this.homeElementService.careerElement.getBoundingClientRect().y -
      this.pageOffset -
      1;

    // Deactivate all of them
    this.projectsActive = false;
    this.skillsActive = false;
    this.careerActive = false;
    this.homeActive = false;

    // Only enable the last
    if (careerPos < 0) {
      this.careerActive = true;
    } else if (skillsPos < 0) {
      this.skillsActive = true;
    } else if (projectPos < 0) {
      this.projectsActive = true;
    } else {
      this.homeActive = true;
    }
  }

  /**
   * Check if a lang is active
   * @param lang A lang to check
   */
  isLangActive(lang: string): Boolean {
    // Check if the current lang include the lang to test
    return this.langService.getCurantLang().includes(lang);
  }

  /**
   * Change the curerent languages of the pages
   * @param lang The targent languages
   */
  changeLang(lang: string) {
    this.langService.changeCurrentLang(lang)
  }
}
