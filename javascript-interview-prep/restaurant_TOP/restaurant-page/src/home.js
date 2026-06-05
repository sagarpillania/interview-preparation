

export function loadHome(){
    function createElement(element,clasname){

        let el=document.createElement(element);
        el.className=clasname;
        return el;
    }


    let divContainer=document.createElement("div");
    divContainer.id="mainContainer";
    let h1=createElement("h1","heading");
    h1.innerText="TriPt- Cuisine At iTs Finest";
    let img=createElement("img","image");
    img.src = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"; // A beautiful, generic restaurant interior
    img.alt = "Tript Restaurant Interior";
    let para=createElement("p","para");
    para.innerText="Welcome to TriPt, where culinary tradition meets modern innovation. We specialize in crafting unforgettable dining experiences using local, organic ingredients sourced directly from nearby farms. From our signature slow-roasted meats to our vibrant, hand-tossed artisan plates, every dish is prepared with meticulous care and a passion for flavor harmony. Join us tonight and immerse yourself in a warm atmosphere where exceptional cuisine is served at its absolute finest.";
    divContainer.appendChild(h1);
    divContainer.appendChild(img);
    divContainer.appendChild(para);

    return divContainer;
}