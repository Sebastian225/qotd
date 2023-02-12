import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { QuestDto } from './quest/Dto/QuestDto';

@Injectable({
  providedIn: 'root'
})
export class QuestService {

  questsMock: QuestDto[] = [
    {
      id: "q1",
      title: "Defend Strahnbrad",
      description: "   - Travel to Strahnbrad\n   - Arthas must survive\n\n\nStrahnbrad may already be under attack by Orcish forces! Immediate action must be taken! Make your way to the village and slay any marauding Orcs you encounter",
      isOptional: false,
      isCompleted: false,
      deadline: new Date(),
    },
    {
      id: "q2",
      title: "Save Timmy",
      description: "   - Slay the Gnoll kidnappers\n\n\nSomething has been agitating the local beasts lately. Just yesterday, a half-starved pack of Gnolls pillaged a local farmhouse, stealing livestock and kidnapping a young boy named Timmy. Hopefully, the cretins haven't eaten him yet.",
      isOptional: true,
      isCompleted: false,
      deadline: new Date(),
    },
    {
      id: "q3",
      title: "Bandit Lord",
      description: "   - Slay Menag, the Bandit Lord\n   - Return Ledger to Gerard\n\n\nThe cunning Bandit Lord, Menag, has been terrorizing the lands around Strahnbrad for months. He and his lackeys just made off with a ledger full of vital information regarding the estate of the local farmer, Gerard.",
      isOptional: true,
      isCompleted: false,
      deadline: new Date(),
    },
  ]

  quests: QuestDto[] = [];

  constructor(private db: AngularFirestore, private authService: AuthService) {
  }

  // getAll() {
  //   this.quests = this.questsMock;

  //   return this.quests;
  // }

  getQuest(id: string){
    return this.db.collection("user-quests")
      .doc(this.authService.currentUserId)
      .collection("quests")
      .doc(id).valueChanges();
  }

  getAll(){
    return this.db.collection("user-quests")
      .doc(this.authService.currentUserId)
      .collection("quests").snapshotChanges();
  }

  addQuest(quest: QuestDto){
    var obj = JSON.parse(JSON.stringify(quest))
    return new Promise<any>((resolve, reject) => {
      this.db.collection("user-quests")
      .doc(this.authService.currentUserId)
      .collection("quests")
      .add(obj).then(response => {
        console.log(response);
      },
      error => reject(error)
      );
    })
  }

  deleteQuest(quest: QuestDto){
    return this.db.collection("user-quests")
      .doc(this.authService.currentUserId)
      .collection("quests")
      .doc(quest.id).delete();
  }

  updateQuest(quest: QuestDto, id: string){
    return this.db.collection("user-quests")
      .doc(this.authService.currentUserId)
      .collection("quests")
      .doc(id)
      .update({
        title: quest.title,
        description: quest.description,
        isOptional: quest.isOptional,
        isCompleted: quest.isCompleted,
        deadline: quest.deadline
      });
  }
}
