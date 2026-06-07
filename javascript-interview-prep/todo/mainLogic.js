import { Project } from "./project.js";
import { Todos } from "./todos.js";

const projects=[];

export function getProjects(){
    return projects;
}

export function saveToLocalStorage(){
    localStorage.setItem("myTodosData",JSON.stringify(projects));
}
//we have to do this default one after looking into local storage that ki hamare pass phle se data hai ya ni?
export function loaddata(){    
    let savedData=localStorage.getItem("myTodosData");

    if(!savedData){
        const defaultproject=new Project("Default");
        const starterTask=new Todos("T1","Some Desc","Low","3 july 2026");
        defaultproject.addTodo(starterTask);
        projects.push(defaultproject);
    }
    else{
        savedData=JSON.parse(savedData);
        savedData.forEach((elee)=>{
            const restoredProject=new Project(elee.title);
            elee.todos.forEach((ele) => {
                const todoo=new Todos(ele.title,ele.description,ele.priority,ele.dueDate);
                restoredProject.addTodo(todoo);
            });
            projects.push(restoredProject);
        })
    }
}
