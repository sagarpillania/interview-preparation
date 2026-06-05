

export function loadMenu(){
    function createElement(element,clasname){

        let el=document.createElement(element);
        el.className=clasname;
        return el;
    }


    let menuContainer=document.createElement("div");
    menuContainer.id="menuuContainer";
    let h1=createElement("h1","heading");
    h1.innerText="Menu- Cuisine At iTs Finest";
    let menuItems=createElement("ul","menuuItems");
    const Items=["Truffle Mac & Cheese", "Wood-fired Margherita Pizza", "Signature Lava Cake"];
    Items.forEach(item=>{
        const li=document.createElement("li");
        li.innerText=item;
        menuItems.appendChild(li);
    });

    menuContainer.appendChild(h1);
    menuContainer.appendChild(menuItems);


    return menuContainer;
}