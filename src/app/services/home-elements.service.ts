import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeElementsService {

  /*
   * Elements composing our page
   */
  public projectsElement: HTMLElement;
  public skillsElement: HTMLElement;
  public careerElement: HTMLElement;

  constructor() { }
}
