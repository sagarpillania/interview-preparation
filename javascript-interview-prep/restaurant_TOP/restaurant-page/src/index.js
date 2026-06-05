import "./style.css";
import {loadHome} from "./home.js";
import {loadMenu} from "./menu.js";
import {loadAbout} from "./about.js";

const content=document.getElementById("content");

function renderEle(templateName){
    content.innerText="";
    content.appendChild(templateName);
}

document.getElementById("home").addEventListener("click",()=>{
    renderEle(loadHome());
});
document.getElementById("menu").addEventListener("click",()=>{
    renderEle(loadMenu());
});
document.getElementById("about").addEventListener("click",()=>{
    renderEle(loadAbout());
});

content.innerText="This is a Restaurant Page where we will learn the module and webpack way to make a page"