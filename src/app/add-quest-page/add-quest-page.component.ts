import { Component, OnInit } from '@angular/core';
import { QuestService } from '../quest.service';
import { QuestDto } from '../quest/Dto/QuestDto';

@Component({
  selector: 'app-add-quest-page',
  templateUrl: './add-quest-page.component.html',
  styleUrls: ['./add-quest-page.component.css']
})
export class AddQuestPageComponent implements OnInit {

  quest: QuestDto = new QuestDto();

  constructor(private _questService: QuestService) { }

  ngOnInit(): void {
  }

  addQuest(){
    this._questService.addQuest(this.quest);
  }

}
