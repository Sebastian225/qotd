import { Component, OnInit, Input } from '@angular/core';
import { QuestDto } from './Dto/QuestDto';

@Component({
  selector: 'app-quest',
  templateUrl: './quest.component.html',
  styleUrls: ['./quest.component.css']
})
export class QuestComponent implements OnInit {

  @Input() quest: QuestDto = new QuestDto();

  constructor() { }

  ngOnInit(): void {
  }

}
