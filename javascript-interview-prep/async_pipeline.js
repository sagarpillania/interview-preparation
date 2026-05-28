// Callback-> Promises -> Async Await

// CALLBACK -> basically ek function jisko hm bhej rhe hai kisi aur function mei and bol rhe hai isko execute krdena jab mann kre apka. 

function Wm(clothes,done){
    console.log("Washing Started");
    setTimeout(()=>{
        console.log("Washing finished");
        done(); //idhr call back function call ho rha hai Wm function ki mrzi pr = inverison of control
    },3000);
}

Wm("shirts", function done(){
    console.log("Take clothes out")
});

//Real world example:--------------> 
// function getProfile(id) {
//     console.log("Step 1: Code starts");
//     User.findOne({ id: id }, function(err, userFromDB) {
//         // ye dusra callback hai ki jb user mil jaye toh ye log krdena console mei 
//         console.log("Step 3: Database responded! User is:", userFromDB.name);
//     });
//     console.log("Step 2: Code ends");
// }
// getProfile(101);
//Execution flow:- Step 1: Code starts. Step 2: Code ends.. (A few milliseconds or seconds later) Step 3: Database responded! User is: Sagar

// Need of Promise because of callback HELL - Nesting of callbacks, inversion of control(kiske pass h control)

//-------------------------------   PROMISES  ------------------------------------------------

// Promise- special JS object and it represent the eventual result or rejection of an async operation. ek tarah ka data placeholder hai jab hm req krte hai server se data ke liye toh JS kehta hai ye mene ek empty promise obj bnaya ha toh jisme mere pass abhi data nahi hai(undefined) and state =pending,  but i promise mei dei deta hu data usme kuch seconds ke baad.
// Promise have three stages- pending, resolve/fulfilled or reject and after any of it called then promise terminates.
// pending- waiting for db to reponse the requested data. , res= data recieved and given, rej= error

const myPromise=new Promise((resolve,reject)=>{
    console.log("Point 1");
    resolve("Point 2");
    console.log("Point 3");
});

myPromise.then((data)=>console.log(data));

console.log("Point 4");

//o/p is point 1,3,4,2 becuase ye Promise constructor wala sb kuch synchronous hai toh 1 hua but resolve mei hmne data bhej dia toh vo ni hura print but single thread ke usme 3 hua print fr aya .then()/.catch()= ye async task hai toh ye high priority waiting rom mei gya i.e Microtask Queue and fr print hua 4 and then callstack empty thn hua 2. 

// useCase => fetching the api. fetch() khud ek promise hai jo internally upar syntax use krta h

// const gitHUbProfile= fetch("api.github.com/users/sagar");
// console.log(gitHUbProfile); //if we log immediately it will say Promise { <pending> }
// gitHUbProfile
//     .then((response)=>response.json()) //agar resolve ho gya toh idhr aayega data jo mila hai
//     .then((userdata)=>console.log(userdata)) //jo data mil kr json mei change ho gya idhr aake uspe print
//     .catch((err)=>console.log(err)); // if error aya fetch krne mei toh idhr aja

// --------------------------------------------------------------------------------------------------

// Promise.finally -> is defineitley run doesnt matter the resolve or reject happen it is basiclly used to hide the UI spinning/loading. chae reject ho ya resolve ye jrur run krega itne show krega loading ui and jaise hi execute hua ui ht kayega

// promise.all()=> takes all the promises as an array and execute them parallely and return the result
// const fetchProfile = fetch("api/profile");
// const fetchOrders = fetch("api/orders");
// const fetchProducts = fetch("api/products");

// // Start all three requests at the exact same time. If even one single promise inside the array gets rejected, the entire Promise.all() instantly fails and throws an error.
// Promise.all([fetchProfile, fetchOrders, fetchProducts])
//     .then(([profileData, ordersData, productsData]) => {
//         // Destructures the resulting array perfectly
//         console.log("All data arrived simultaneously!");
//     })
//     .catch((err) => {
//         console.error("One of our API requests failed! Dashboard broken.", err);
//     });

// -----------------------------ASYNC AWAIT -------------------------------

async function fetchApi (){
    console.log("fetching the data of the user");
    try{
        const response=await fetch("api.github.com/users/sagar");
        const data=await response.json();
        console.log(`Data fetched `,data);
    }catch(err){
        console.log(err);
    }
}