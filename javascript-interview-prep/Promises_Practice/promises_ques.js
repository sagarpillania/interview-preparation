// The "Pizza Order" (Promise & State Mastery)

// The Task:
// Create a variable var pizzaPromise that contains a new Promise.
// The Logic:
// Inside the promise, create a variable isOvenWorking = true.
// Use a setTimeout to simulate a 2-second wait (the time it takes to cook).
// After 2 seconds:
// If isOvenWorking is true, resolve the promise with the data: "Hot Pizza Delivered! 🍕".
// If isOvenWorking is false, reject it with: "Oven broke down! No pizza. 😭".
// Goal:
// Check the state of pizzaPromise immediately (before 2 seconds).
// Use .then() to log the success message.
// Use .catch() to log the error message.
// Check the state again after 3 seconds to see if it changed to fulfilled.

var pizzaPromise=new Promise((res,rej)=>{
    var isOvenWorking=true;
    setTimeout(()=>{
        if(isOvenWorking){
            res("Hot Pizza Delivered");
        }
        else{
            rej("Oven broke down! No pizza");
        }
    },2000);
});
console.log(pizzaPromise); //Promise { <pending> }

pizzaPromise.then((message)=>{
    console.log(message); //Hot Pizza Delivered
    console.log(pizzaPromise); //Promise { 'Hot Pizza Delivered' }
}).catch((err)=>{
    console.log(err);
})