import { Component, OnInit, Input } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Project } from "./project";
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { faGithub, faGooglePlay } from "@fortawesome/free-brands-svg-icons";
import { PicturesService } from "src/app/services/pictures.service";
import { LangService } from "src/app/services/lang.service";

@Component({
  selector: "project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.scss"],
})
export class ProjectComponent implements OnInit {
  // The project to be displayed
  @Input()
  project: Project;

  constructor(
    private modalService: NgbModal,
    private library: FaIconLibrary,
    public langService: LangService,
    public picturesService: PicturesService
  ) {
    library.addIcons(faGithub, faGooglePlay);
  }

  ngOnInit(): void {}

  /**
   * Open the project model for more details
   * @param content  The modals contents itself
   */
  openModal(content) {
    this.modalService.open(content, { size: "xl" });
  }

  /**
   * Get the compressed version path of a pictures
   * @param path The patch of the picture we want the compressed version for
   */
  getCompressedPath(path: String) {
    return path.concat("-compressed.jpg");
  }

  /**
   * Get the font awesome icon name for a specific provider
   * @param provider The provider for which we want the icon
   */
  getIconForProvider(provider: String) {
    switch (provider) {
      case "GitHub":
        return "github";
      case "PlayStore":
        return "google-play";
    }
  }
}
