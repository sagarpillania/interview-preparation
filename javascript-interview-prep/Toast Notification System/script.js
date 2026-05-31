let message=document.getElementById("message");

function ToastNotification(arg){
    let closebtn=document.createElement("button");
    closebtn.innerText="x";

    let para=document.createElement("p");
    if(arg==="success"){
        para.innerText="Success: Your action was completed";
        para.style.backgroundColor="green";
        para.style.color="white";
        para.style.zIndex=2;
        message.appendChild(para);
    }
    else if(arg==="error"){
        para.innerText="Error: Something went wrong";
        para.style.backgroundColor="red";
        para.style.color="white";
        para.style.zIndex=2;
        message.appendChild(para);
    }
    else{
        para.innerText="Warning: Please check your input";
        para.style.backgroundColor="yellow";
        para.style.color="black";
        message.appendChild(para);
    }
    closebtn.addEventListener("click",(()=>{
        para.remove();
    }));
    para.className="show";
    para.appendChild(closebtn);
    setTimeout(()=>{
        para.className="hide";
        para.remove();
    },3000);
}


document.getElementById("success").addEventListener("click",(()=>{
    ToastNotification("success");
}));
document.getElementById("error").addEventListener("click",(()=>{
    ToastNotification("error");
}));
document.getElementById("warning").addEventListener("click",(()=>{
    ToastNotification("warning");
}));
