import {
  Component,
  OnInit,
  HostListener,
  ElementRef,
  ViewChild,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from "@angular/core";
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

  // Enum of the different scroll target
  public ScrollTarget = ScrollTarget;

  // Is the top menu collapsed ?
  public isMenuCollapsed = true;

  // Offset to apply on the element position
  public pageOffset: number = 0;

  // Activate or not the av button
  public homeActive = true;
  public projectsActive = false;
  public skillsActive = false;
  public careerActive = false;

  constructor(
    private homeElementService: HomeElementsService,
    private langService: LangService
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    // Calculate the offset to apply on page scroll
    this.pageOffset = this.currentElementRef.nativeElement.offsetHeight;
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
    this.langService.changeCurrentLang(lang);
  }

  /**
   * Scroll to a defined target
   * @param target 
   */
  scrollToTarget(target: ScrollTarget): void {
    var element: any;
    switch (target) {
      case ScrollTarget.HOME:
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        return;
      case ScrollTarget.PROJECTS:
        element = this.homeElementService.projectsElement;
        break;
      case ScrollTarget.SKILLS:
        element = this.homeElementService.skillsElement;
        break;
      case ScrollTarget.CAREER:
        element = this.homeElementService.careerElement;
        break;
    }
    //Get the scroll poistion and apply the diff of the header
    var scrollOffset = element.getBoundingClientRect().y - this.pageOffset
    if(window.innerWidth < 980) {
      // Apply another offset because the scroll poisition is fcked up
      scrollOffset -= 170
    }
    // Launch the scroll
    window.scrollBy({
      top: scrollOffset,
      behavior: "smooth",
    });
  }
}

export enum ScrollTarget {
  HOME,
  PROJECTS,
  SKILLS,
  CAREER,
}
