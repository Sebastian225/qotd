import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private questService: QuestService, private router: Router) { }

  ngOnInit(): void {
    //this.quests = this.questService.getAll();

    this.questService.getAll().subscribe(res =>{
      this.quests = res.map(e => {
        console.log(e.payload.doc.id)
        return{
          ...e.payload.doc.data(),
          id: e.payload.doc.id 
        } as unknown as QuestDto;
      });
      console.log(this.quests);
      if(this.quests.length){
        this.selectedQuest = this.quests[0];
      }
    });
    
  }

  selectQuest(quest: QuestDto){
    this.selectedQuest = quest;
  }

  completeQuest(){
    //console.log(this.selectedQuest.id);
    this.selectedQuest.isCompleted = true;
    this.questService.updateQuest(this.selectedQuest, this.selectedQuest.id);
  }

  editQuest(){
    let route = 'add/' + this.selectedQuest.id;
    this.router.navigate([route]);
  }
}
