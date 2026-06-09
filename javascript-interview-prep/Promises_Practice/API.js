// API=Application Programing Interface. which is used to take our request to server and then get response bakc to us. 
// We can use another perosn API but for that we need the API key to use it. ApI key used to better track abuse of their systems and data. Additionally, it can also be a way for those services to mitigate and recuperate operating costs. 

const img=document.querySelector("img");
const gifInput=document.getElementById("gifInput");
const submit=document.getElementById("submit");



function fetchGif(val){
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=Jt4CERiIuDjxJSzi9v28Fs4ptbdgp6Qt&s=${val}`)
    .then((response)=>{
        if(!response.ok){
            throw new Error("Invalid");
        }
        const res=response.json();
        return res;
    }). then((res)=>{
        console.log(res);
        img.src=res.data.images.original.url;
    })
};
fetchGif("puppy");
submit.addEventListener("click",()=>{
    const val=gifInput.value;
    if(val.trim()!==""){
        fetchGif(val);
    }
    else{
        alert("kuch type toh kar");
    }

});