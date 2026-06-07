export class Todos{
    constructor(title,description,priority,dueDate){
        this.title=title;
        this.description=description;
        this.priority=priority;
        this.dueDate=dueDate;
        this.completed=false;
    }

    taskCompleted(){
        this.completed=(this.completed===false)?true:false;
    }
}