import { Todos } from "./todos.js";
import { Project } from "./project.js";
import { loaddata, saveToLocalStorage, getProjects } from "./mainLogic.js";

function renderSidebar(){
    const ul= document.createElement("ul");
    const list=document.getElementById("projects-list");
    list.innerHTML=""; //tolcear previous list
    const allProjetcs=getProjects();
    allProjetcs.forEach((item,index)=>{
        const li=document.createElement("li");
        li.innerText=item.title
        li.dataset.projectIndex=index;
        ul.appendChild(li);
    });
    list.appendChild(ul);
    ul.addEventListener("click",((e)=>{
        if(e.target.tagName==="LI"){
            const clickedIndex=e.target.dataset.projectIndex;
            currentProject=getProjects()[clickedIndex];
            renderTasks();
            document.getElementById("current-project-title").innerText = `Project: ${currentProject.title}`;
        }
    }));
}

const tasksList=document.getElementById("tasks-list");

function renderTasks(){
    tasksList.innerHTML="";
    currentProject.todos.forEach((todo,todoIndex)=>{
        const todoCard=document.createElement("div");
        todoCard.style.border="1px solid black";
        todoCard.style.width="30vw";
        todoCard.style.padding="10px";
        todoCard.innerHTML=`
            <h3>Title: ${todo.title}</h3>
            <p>Description: ${todo.description}</p>
            <p>Priority: ${todo.priority}</p>
            <p>Due Date: ${todo.dueDate}</p>
            <button class="delete-btn" data-todo-index=${todoIndex}>Delete Task</button>
        `
        tasksList.appendChild(todoCard);
    });
}
tasksList.addEventListener("click",((e)=>{
    if(e.target.classList.contains("delete-btn")){
        const todoIndex=e.target.dataset.todoIndex;
        currentProject.deleteTodo(todoIndex);
        saveToLocalStorage();
        renderTasks();
    }
}));

const addProjectBtn=document.getElementById("add-project-btn");
addProjectBtn.addEventListener("click",()=>{
    const projectTitle=prompt("Enter New Project Name");
    if(projectTitle && projectTitle.trim() !==""){
        const newFolder=new Project(projectTitle.trim());
        getProjects().push(newFolder);
        saveToLocalStorage();
        renderSidebar();
    }
});

const addTaskBtn=document.getElementById("add-todo-btn");
const todoModal=document.getElementById("todo-modal");
const closeModal=document.getElementById("close-modal-btn");
const todoForm=document.getElementById("todo-form");

addTaskBtn.addEventListener("click",()=>{
    todoModal.style.display="flex";
});

closeModal.addEventListener("click",()=>{
    todoModal.style.display="none";
    todoForm.reset();
});

todoForm.addEventListener("submit",(e)=>{
    e.preventDefault(); //Stop the page from reloading!

    const title = document.getElementById("form-task-title").value;
    const description = document.getElementById("form-task-desc").value;
    const priority = document.getElementById("form-task-priority").value;
    const dueDate = document.getElementById("form-task-date").value;

    const newTodo=new Todos(title,description,priority,dueDate);
    currentProject.addTodo(newTodo); //selected project ke todos mei bhej do ye sb
    saveToLocalStorage();
    renderTasks();

    todoForm.reset(); //reset for next use.
    todoModal.style.display="none";
})

loaddata();
let currentProject=getProjects()[0];
renderSidebar();
renderTasks();