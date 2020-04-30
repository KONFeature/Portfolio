import { Injectable } from "@angular/core";
import { getBrowserLang } from "@locl/core";

@Injectable({
  providedIn: "root",
})
export class LangService {
  constructor() {}

  /**
   * Return the current language used
   */
  getCurantLang(): string {
    // Get the current lang
    var currentLang = localStorage.getItem("lang");
    if (!currentLang) currentLang = getBrowserLang();
    return currentLang;
  }

  /**
   * Change the current lang used
   * @param lang thge new lang
   */
  changeCurrentLang(lang: string) {
    // Set the var
    localStorage.setItem("lang", lang);

    // Need to refresh (Runtime change not supported yet by angular i18n)
    location.reload();
  }

  /**
   * Extract the right text from a lang object
   */
  extractRightText(langObjects: LangsObject[]): string {
    var foundedText: string = null;
    langObjects.forEach((langObject) => {
      if (this.getCurantLang().includes(langObject.lang))
      foundedText = langObject.text;
    });

    if (!foundedText) foundedText = langObjects[0].text;
    return foundedText;
  }
}

export class LangsObject {
  lang: string;
  text: string;
}

