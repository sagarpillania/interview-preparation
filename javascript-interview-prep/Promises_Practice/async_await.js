// When a function is declared with async, it automatically returns a promise; returning in an async function is the same as resolving a promise. Likewise, throwing an error will reject the promise.

// const yourAsyncFunction = async () => {
//   // do something asynchronously and return a promise
//   return result;
// }

// anArray.forEach(async item => {
//   // do something asynchronously for each item in 'anArray'
//   // one could also use .map here to return an array of promises to use with 'Promise.all()'
// });



const server={
    people:[
        {
            name:"Odin",
            age:100,
        },
        {
            name:"Thor",
            age:100,
        },
        {
            name:"IronMan",
            age:40,
        },
        {
            name:"Captain",
            age:400,
        },
        {
            name:"Thanos",
            age:1000,
        }
    ],

    getPeople(){
        return new Promise((res,rej)=>{
            setTimeout(()=>{
                res(this.people);
            },2000);
        })
    }
};

async function getInfo(name){
    const res= await server.getPeople();
    const person=res.find((people)=>people.name===name);
    return person;
}

const thanos=await getInfo("Thanos");
console.log(thanos);

//though we can use await only ith async but in case of node.js environment or if script.js is f type="module" then we can use it wothout async