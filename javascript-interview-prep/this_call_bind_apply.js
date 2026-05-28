//The 4Rules of "this" Precedence -> 
// 1.)Default Binding (Lowest Priority)= if call this inside function normally. function(){c.l(this);}
//2)  Implicit Binding:- which we did below
// 3) Explicit Binding- using call,bind , apply.
// 4) The new Keyword Binding (Highest Priority)
const account={
    name:"Sagar",
    balance:2500,
    // showBalance:()=>{console.log(balance)}, // beause it look for variable balance not the property of the object
    // showBalance:()=>{console.log(this.balance)},
    showBalance:function(){console.log(this.balance)},
};

// account.showBalance(); //here is used only balance in c.l it is showing balance is not defined because the arrow function which we used takes this variable from it's parent(global scope ) because object {} doesnt create a block/new scope in this case and in parent balance is not defined. 

account.showBalance(); //now when we used this.balance then it show undefined because it goes to global scope i.e window and ask do you have property with balance and it returned undefined. and if we remove the arrow function then it takes the this from object. as account is the object calling the function


const account2={
    name:"Sagar",
    balnce:250000000,
    outerFunc:function(){
        return ()=>{
            console.log(this.balnce);
        }
    }
}
var stored=account2.outerFunc();
stored();

function Person(name){
    this.name=name;
}
const user=new Person("Sagar");
console.log(user.name); //sagar


// ------------------CALL-------------------Invoke Immediately with Comma-Separated Arguments
const captain={
    name:"Steve",
    friend:"Thor",
    greet:function(m1,m2){
        console.log(`Hi ${this.name}, I am your friend ${this.friend}`);console.log(`I work with ${m1} and ${m2}`);
    }
}
captain.greet("spiderman","Loki");

const ironMan={
    name:"Tony",
    friend:"jarvis"
}

// captain.greet.call(ironMan,"Antman","Thanos");

// ----------Apply--------------Invoke Immediately with Array Arguments
// captain.greet.apply(ironMan, ["Thanos","Antman"]);

// --------BIND------------
// const hero=captain.greet.bind(ironMan, ["Thanos","Hulk"]); it will treat the whole array as one argument and for iother undefined comes
// const hero=captain.greet.bind(ironMan, "Thanos","Hulk");
// hero();


// ----------POLYFILL OF MYCALL same as call()------------------
// this will point to the function because left side of .call is greet which is function.
// this is the function and context is the object okay. add function to object by context.addfunction=this; 
// So that it looks like context= {name:"tony", friend:"jarvis", attachedFunction:greet} as we added this to it.
// aur hme us function ko this bnana tha to bna dia.

Function.prototype.myCall=function(context,...args){
    if(context==null || context==undefined){
        context=globalThis;
    }
    context.attachedFunction=this;
    const value=context.attachedFunction(...args);
    delete context.attachedFunction;
    return value;
}
captain.greet.myCall(ironMan, "Thanos", "Hulk");

// ----------_ASYNC-----------------------