import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestService } from '../quest.service';
import { QuestDto } from '../quest/Dto/QuestDto';

@Component({
  selector: 'app-add-quest-page',
  templateUrl: './add-quest-page.component.html',
  styleUrls: ['./add-quest-page.component.css']
})
export class AddQuestPageComponent implements OnInit {

  quest: QuestDto = new QuestDto();
  nrHours: number = 24;
  id: string | null = 'new';

  constructor(
    private questService: QuestService, 
    private router: Router,
    private act: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.act.snapshot.paramMap.get('id');
    if(this.id !== 'new'){
      this.questService.getQuest(this.id as string).subscribe(res => {
        if(res){
          this.quest =  JSON.parse(JSON.stringify(res));
          this.quest.id = this.id as string;
          console.log(this.quest);
          this.nrHours = new Date(this.quest.deadline).getHours() - new Date().getHours();
          if(new Date(this.quest.deadline).getDay() > new Date().getDay()){
            this.nrHours += 24;
          }
        }
      })
    }
  }

  addQuest(){
    if(this.id === 'new'){
      this.quest.isCompleted = false;
      this.quest.deadline = new Date();
      this.quest.deadline.setHours(this.quest.deadline.getHours() + this.nrHours);
  
      if(!this.invalidDeadline()){
        this.questService.addQuest(this.quest);
        this.router.navigate(['']);
      } else {
        alert("Deadline error!");
      }
    } else {
      this.questService.updateQuest(this.quest, this.id as string);
      this.router.navigate(['']);
    }
  }

  invalidDeadline(): boolean{
    return (this.nrHours < 0 || this.nrHours > 24);
  }

}
