import { Injectable } from '@angular/core';
import { QuestDto } from './quest/Dto/QuestDto';

@Injectable({
  providedIn: 'root'
})
export class QuestService {

  questsMock: QuestDto[] = [
    {
      title: "Defend Strahnbrad",
      description: "   - Travel to Strahnbrad\n   - Arthas must survive\n\n\nStrahnbrad may already be under attack by Orcish forces! Immediate action must be taken! Make your way to the village and slay any marauding Orcs you encounter",
      isOptional: false
    },
    {
      title: "Save Timmy",
      description: "   - Slay the Gnoll kidnappers\n\n\nSomething has been agitating the local beasts lately. Just yesterday, a half-starved pack of Gnolls pillaged a local farmhouse, stealing livestock and kidnapping a young boy named Timmy. Hopefully, the cretins haven't eaten him yet.",
      isOptional: true
    },
    {
      title: "Bandit Lord",
      description: "   - Slay Menag, the Bandit Lord\n   - Return Ledger to Gerard\n\n\nThe cunning Bandit Lord, Menag, has been terrorizing the lands around Strahnbrad for months. He and his lackeys just made off with a ledger full of vital information regarding the estate of the local farmer, Gerard.",
      isOptional: true
    },
  ]

  quests: QuestDto[] = [];

  constructor() { }

  getAll() {
    this.quests = this.questsMock;
    return this.quests;
  }

  addQuest(quest: QuestDto){
    this.quests.push(quest);
  }
}
