import { Component, OnInit } from '@angular/core';
import { RaceService } from '../race.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent implements OnInit {
  race: string = RaceService.RACE;

  constructor(private _raceService: RaceService) { }

  ngOnInit(): void {
  }

  changeRace(){
    RaceService.RACE = this.race;
    this._raceService.refresh();
  }

}
