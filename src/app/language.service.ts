import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLang = 'en'; // Default language

  constructor() {}

  setCurrentLanguage(lang: string) {
    this.currentLang = lang;
  }

  getCurrentLanguage() {
    return this.currentLang;
  }
}
