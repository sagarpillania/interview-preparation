//Js is interpreted language,is a synchronous, single-threaded language. that it is executed when it loads. it doesnt compiled beforehand like java
// There are three etypes of variables initalizer data types in JS right var, let , const.
//var quality= function scope, can be reassigned , can be redeclared. if called before intialization=undefined
// let quality=Block scope, can be reassigned, cannot be declared in same block of scope.if called before intialization=refrenceerror (TDZ)
// const quality= Block scope, cant reassigned, cant be declared again. if called before intialization=refrenceerror (TDZ).

// function foo(){
//     var x=1;// available inside both function

//     function foo2(){
//         var y=2; //only availble to foo2.
//         console.log(x);//1 but if below var x=5 then it show undefined because of hoisting
//         console.log(y);//2
//         var x=5;
//     }
//     foo2();
//     console.log(x);//1
//     console.log(y);//not defined because of function scope. outside NA so answer is not defined because of function scope
// }
// foo();

// so var is hoisted and it is intialized as undefined under the foo2 execution ground so when we call c.l(x) then jS starts looking for x from th nearest that is foo2 itself and it funded as undefined and print. but if it wasnt in foo2 then it would have gone outside the scope to search and print the 1.

// function lett(){
//     console.log(a); //Cannot access 'a' before initialization for both var and const
//     let a=10;
//      function lett2(){
//         if(a==10){

//             let b=20;
//             console.log("inside block if", b);
//         }
//         console.log(a);
//         console.log(b); //b is inside a block so wont be able to access it outside.
//         // let a=30;
//      }
//      lett2();
//      console.log(a);
//      console.log(b);
// }
// lett();

// because of temporal dead zone it showed error as a is intialized but not assigned any value like var so accessing it before cause an error. same as for const below

// function lett(){
//     const a=10;
//      function lett2(){
//         if(a==10){

//             const b=20;
//             console.log("inside block if", b);
//         }
//         console.log(a);
//         console.log(b); //b is inside a block so wont be able to access it outside.
//         const a=30;
//      }
//      lett2();
//      console.log(a);
//      console.log(b);
// }
// lett();

// Hoisting is JavaScript's behavior of moving declarations to the top of their current scope before code execution.

// FUNCTIONS -----> normal function and expression done above

var amount=1000;
var balance;
var rate=10;
var withdrawAmount=500;
function deposit(amount,balance,rate){
    balance=amount+(amount*rate)/100
    console.log("amount after one month interest "+balance);
}
deposit(1000,0,10);

const calculateInterest=(balance,rate)=>{
    const sI=(balance*rate)/100;
    // return "SI is "+ sI;
    return sI;
}
console.log(calculateInterest(1100,10));

const withdraw=function(balance,withdrawAmount){
    if(balance<0){
        return "error";
    }
    balance=balance-withdrawAmount;
    console.log("Balance after withdrawing is "+balance);
}

withdraw(1100,500);

//Callbacks-------->a function which is passed as argument/called inside another function to execute later.
// WHEN should you use Callbacks?-> Event Listeners: When you want code to run only when a user interacts with the page (e.g., clicking a button)., TIMERS(setTimeout), Array method=map,filter,foreach, API calls.
// so in deposit we can pass the function to calculate interest as callback

function newAmount(amount,calculateInterest){
    return amount+=calculateInterest(amount,10);
}

console.log("callback new amount is "+newAmount(2000,calculateInterest));

// closure- It means when inner function remembers the variabes,parameters,function from outer function.It is like inheritance but differnece is closure gets the data from parent but both share same memory so any changes will change in parents lexical env too. But it is otherwise in case of inheritance as child take refrence from parent as copy.


function createCounter(){
    let count=0;
    return function incCount(){
        console.log(++count);
    }
}
const counter=createCounter(); // so here the createCOunter gave the inner function to the counter.
counter(); // so here only inner function is running
counter();// count=1
counter();// count 02
counter();

// Step-7 Real life MiNI challenge= shopping cart total calculator
const cart=[
        {name:"soap", price:10,quantity:2},
        {name:"brush",price:20,quantity:1},
        {name:"poha", price:50,quantity:2},
    ];

function totalPrice(cart){
    let totalPricee=0;
    for(const item of cart){
        totalPricee+=item.price*item.quantity;
    }
    return totalPricee;
}
console.log("total price of cart: ",totalPrice(cart));

var discount=20;

const afterDiscount=(totalPrice,discount)=>{
    // let total=0;
    let total=totalPrice(cart);
    // for(const item of cart){
    //     total+=item.price*item.quantity;
    // }
    return total-=(total*discount)/100;
}
console.log("After Discount: ",afterDiscount(totalPrice,discount));

function printInvoice(totalPrice,afterDiscount){
    return `Price before Discount: ${totalPrice(cart)}
Total Price after Discount:${afterDiscount(totalPrice,discount)}
    `;
}

console.log(printInvoice(totalPrice,afterDiscount));


