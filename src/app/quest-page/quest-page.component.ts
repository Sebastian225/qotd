import { Component, OnInit } from '@angular/core';
import { QuestService } from '../quest.service';
import { QuestDto } from '../quest/Dto/QuestDto';

@Component({
  selector: 'app-quest-page',
  templateUrl: './quest-page.component.html',
  styleUrls: ['./quest-page.component.css']
})
export class QuestPageComponent implements OnInit {

  quests: QuestDto[] = []
  selectedQuest: QuestDto = new QuestDto();

  constructor(private _questService: QuestService) { }

  ngOnInit(): void {
    this.quests = this._questService.getAll();
    if(this.quests.length){
      this.selectedQuest = this.quests[0];
    }    
  }

  selectQuest(quest: QuestDto){
    this.selectedQuest = quest;
  }

}
