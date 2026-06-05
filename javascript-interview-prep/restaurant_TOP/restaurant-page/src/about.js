export function loadAbout(){
    function createElement(element,clasname){

        let el=document.createElement(element);
        el.className=clasname;
        return el;
    }


    let aboutContainer=document.createElement("div");
    aboutContainer.id="abouttContainer";
    let h1=createElement("h1","heading");
    h1.innerText="Home";
    let contact=createElement("h2","menuuItems");
    contact.innerText="Contact Us"
    const info = createElement("p","infoo");
    info.textContent = "📍 123 Flavor Street, Foodville | 📞 (555) 123-4567";

    aboutContainer.appendChild(h1);
    aboutContainer.appendChild(contact);
    aboutContainer.appendChild(info);


    return aboutContainer;
}