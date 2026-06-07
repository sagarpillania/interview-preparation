export class Project{
    constructor(title){
        this.todos=[]; //har ek project folder ka khud ka todo hona chaye na 
        this.title=title;
    }

    addTodo(item){
        this.todos.push(item);
    }

    deleteTodo(index){
       this.todos.splice(index,1)
    }
}