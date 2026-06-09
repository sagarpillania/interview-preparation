// Write a function called checkSecurity that takes two arguments:

// age (a number).

// callback (a function).

// The Logic:

// If the age is 18 or more, the checkSecurity function should call the callback and pass the message: "Entry Allowed".

// If the age is less than 18, it should call the callback and pass: "Entry Denied".

// Goal:
// Execute checkSecurity(20, ...) and make it print the result to the console using an anonymous function as the callback.


function checkSecurity(age,callback){
    if(typeof age!=="number"){
        throw new Error("Not an Integer");
    }
    if(age>=18){
        callback("Entry Allowed");
    }
    else{
        callback("Entry Denied");
    }
}

checkSecurity(20,(message)=>{
    console.log(message);
})