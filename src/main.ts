
import './polyfills';
import '@angular/localize/init';

import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

import { loadTranslations } from '@angular/localize';
import { getTranslations, getBrowserLang, ParsedTranslationBundle } from '@locl/core';

// Prod mode
if (environment.production) {
  enableProdMode();
}

// Check if we have a trad stored storage
var currentLang = localStorage.getItem("lang")
if(!currentLang) currentLang = getBrowserLang()

// Get the trad file to load 
var tradFile : String
if(currentLang.includes("fr")) {
  tradFile = "assets/i18n/fr.json"
} else {
  tradFile = "assets/i18n/en.json"
}

// Load it
getTranslations(tradFile).then(
  (data: ParsedTranslationBundle) => {

    // Load translations
    loadTranslations(data.translations);

    // Load angular
    platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .then((ref) => {
        // Ensure Angular destroys itself on hot reloads.
        if (window["ngRef"]) {
          window["ngRef"].destroy();
        }
        window["ngRef"] = ref;

        // Otherwise, log the boot error
      })
      .catch((err) => console.error(err));
  }
);
