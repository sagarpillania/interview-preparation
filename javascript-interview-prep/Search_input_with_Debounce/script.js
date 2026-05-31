let search=document.getElementById("search");
let suggestionBox=document.getElementById("suggestionBox");
let timerId;
let counterNo=0;
let counter=document.getElementById("counter");
let suggestions=document.getElementById("suggestions");
const resetButton=document.getElementById("reset");
function resetAll(){
    clearTimeout(timerId);
    counterNo=0;
    counter.innerText=`Debounced ran for : ${counterNo} times`;
    search.value="";
    suggestions.style.display="none";
}
function handlesearch(e){
    const keyword=e.target.value;
    clearTimeout(timerId);
    if(keyword===""){
        suggestions.style.display="none";
        return;
    }
    suggestions.innerHTML="";
    suggestions.style.display="none";
    timerId=setTimeout(()=>{
        suggestions.innerText="Searching for: Laptop";
        suggestions.style.display="block";
        // suggestionBox.appendChild(suggestions);
        counter.innerText=`Debounced ran for : ${++counterNo} times`;
    },500);
};

search.addEventListener("input",handlesearch);
resetButton.addEventListener("click", resetAll);
