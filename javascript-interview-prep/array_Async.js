// map    = transform every item.
// filter = keep selected items.
// reduce = convert array into one final result
// find   = return first matching item
// some   = at least one true?
// every  = all true?
// forEach = do something for each item, no returned array
// sort   = sorts array, but careful: it changes original array

// const arr=[1,2,3,4,8,5,7,6];
// //map- returns new Array
// const newArr=arr.map((item)=>{return item*2});
// console.log("Map fuunction: ",newArr); // go to every item and apply the condition and returns a new Array 
// // filter- returns a neww array

// // const filterArr=arr.filter((item)=>item%2==0);
// console.log("filtered Array: ",arr.filter((item)=>item%13==0));

// // reduce()- it will reduce all elements to one single output in array on condition basis

// const reducedSum=arr.reduce((acc,curr)=>{
//     return acc+curr;
// },0);
// console.log(reducedSum);

// // find()
// console.log(arr.find((item)=>item==12)); //undefined as 12 is not present

// // forEach()- loop through array and do certain things
// arr.forEach((item)=>{
//     // console.log(item);
// })

// // some()- if any one matches the condition return true
// console.log(arr.some((item)=>{ return item===2})); //means present =true

// // every()- if all matches the condition return true

// console.log(arr.every((item)=>item>0)); //true

// // sort()
// console.log(arr.sort()); //sort the arrays

// -------ASYNC and Timers
// setTimeout=> execute ONCE after delay
// console.log("before setTimeout:", 1);
// setTimeout(()=>{
//     console.log("In setTimeout:",2)
// },3000);
// console.log("After setTimeout: ",3);

//so execution order was setTimeout was async function means it have to wait for the execution for 2seconds and rest both were synchronocus function so async function goes into different execution order and rest got printes as JS is synchronous by nature. callback function is async in nature in this but it is syn in map,reduce,filter etc. and it handled outside the call stack.

// setInterval=> repeats continuously and it return an id when it get starts so we store it in a timer or something like that. and use it in clearInterval
// var count=1;
// let timer=setInterval(()=>{
//     console.log("count is: ",count);
//     count++;

//     if(count>5){
//         clearInterval(timer);
//     }
// },1000);

// Destructuring of an Array- write the key in curly braces and write the array name .destructuring copies values into new variables

const details={name:"Sagar", age:23, occupation:"SDE"};

let {name,age,occupation}=details;
name="rahul";
console.log(details.name);
console.log(name);
console.log(age);
console.log(occupation);

// spread operator-> give all the previous details it does Shallow Copy (top level copied, nested still shared) -> to copy,merge,add items,copy objs, update objs without changing the original. if we do newArr=arr then it both points to same memory and any changes will change the original too

// const arr=[1,2];
// const newArr=[...arr,3,4]; 
// console.log("using spread operator ",newArr);

// rest operator-> Take remaining values and pack them together.collects multiple values into a single array/object. so like we have arguments name,age,occupation passing inobject so we do ...credentials and it will collect all the arguments.

// arrrr=[1,2,3,4,5,6,7];
// const [a,b,...rest]=arrrr; //rest operator must be last element as to take remaining
// console.log(a);
// console.log(b);
// console.log(rest);

// ---------------------------Practice Questions-------------------------------------
const transactions = [
  { id: 1, type: "deposit", amount: 1000, status: "success" },
  { id: 2, type: "withdraw", amount: 300, status: "success" },
  { id: 3, type: "deposit", amount: 700, status: "success" },
  { id: 4, type: "withdraw", amount: 1200, status: "failed" },
  { id: 5, type: "interest", amount: 100, status: "success" },
];
// Q1)Use map() to create an array of transaction messages.
const newTrans= transactions.map((item)=>{
    return `Transaction ${item.id}: ${item.type} of ${item.amount} was ${item.status}`;
});

console.log(newTrans);

//Q2 & 3) Use filter() to get only deposits and Use filter() to get only failed transactions.

console.log(transactions.filter((item)=>item.type=="deposit"));
console.log(transactions.filter((item)=>item.status=="failed"));

// Q4) Use reduce() to calculate total successful deposits.
const successDeposit= transactions.filter((item)=>item.type=="deposit" && item.status=="success").reduce((acc,curr)=>{
    return acc+curr.amount;
},0);
console.log(" Total successful deposits.",successDeposit);

// Q5) Use reduce() to calculate current balance...

const currbal=transactions.reduce((acc,curr)=>{
    if(curr.status!=="success"){
        return acc; // ki fail hua tb tk jitna acc hua vo dei do and next pr chlo
    }
    switch (curr.type){
        case "deposit":
        case "interest":
            return acc+curr.amount;
        case "withdraw":
            return acc-curr.amount;
        default:
            return acc;
    }
},0);
console.log("Current Balance is: ",currbal);

// Q6)Use find() to find the first failed transaction. and Use some() to check if any transaction failed.

console.log(transactions.find((item)=>item.status=="failed"));
console.log(transactions.some((item)=>item.status=="failed"));

// Q8) Use every() to check if every transaction has amount greater than 0.
console.log(transactions.every((item)=> item.amount>0));

// Q9 & 10) Use sort() to sort transactions by amount low to high.
console.log(transactions.sort((a,b)=>a.amount-b.amount));
console.log(transactions.sort((a,b)=>b.amount-a.amount));
