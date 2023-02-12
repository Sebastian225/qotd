export class QuestDto{
    id: string = "";
    title: string = "";
    description: string = "";
    isOptional: boolean = false;
    isCompleted: boolean = false;
    deadline: Date = new Date();
}