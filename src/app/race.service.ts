import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  //human, orc, undead, elf
  public static RACE: string = "human";

  constructor() {
    //get race from cookies
  }

  refresh(){
    switch (RaceService.RACE) {
      case "human":
        document.documentElement.style.setProperty('--main-background', "url(./assets/img/human_main.png)");
        document.documentElement.style.setProperty('--button', "url(./assets/img/human_button.png)");
        document.documentElement.style.setProperty('--button-highlight', "url(./assets/img/human_button_highlight.png)");
        document.documentElement.style.setProperty('--quest-highlight', "url(./assets/img/human_quest_highlight.png)");
        break;
      case "orc":
        document.documentElement.style.setProperty('--main-background', "url(./assets/img/orc_main.png)");
        document.documentElement.style.setProperty('--button', "url(./assets/img/orc_button.png)");
        document.documentElement.style.setProperty('--button-highlight', "url(./assets/img/orc_button_highlight.png)");
        document.documentElement.style.setProperty('--quest-highlight', "url(./assets/img/orc_quest_highlight.png)");
        break;
      case "undead":
        document.documentElement.style.setProperty('--main-background', "url(./assets/img/undead_main.png)");
        document.documentElement.style.setProperty('--button', "url(./assets/img/undead_button.png)");
        document.documentElement.style.setProperty('--button-highlight', "url(./assets/img/undead_button_highlight.png)");
        document.documentElement.style.setProperty('--quest-highlight', "url(./assets/img/undead_quest_highlight.png)");
        break;
      case "elf":
        document.documentElement.style.setProperty('--main-background', "url(./assets/img/elf_main.png)");
        document.documentElement.style.setProperty('--button', "url(./assets/img/elf_button.png)");
        document.documentElement.style.setProperty('--button-highlight', "url(./assets/img/elf_button_highlight.png)");
        document.documentElement.style.setProperty('--quest-highlight', "url(./assets/img/elf_quest_highlight.png)");
        break;
      default:
        document.documentElement.style.setProperty('--main-background', "url(./assets/img/human_main.png)");
        document.documentElement.style.setProperty('--button', "url(./assets/img/human_button.png)");
        document.documentElement.style.setProperty('--button-highlight', "url(./assets/img/human_button_highlight.png)");
        document.documentElement.style.setProperty('--quest-highlight', "url(./assets/img/human_quest_highlight.png)");
        break;
    }
  }
}
