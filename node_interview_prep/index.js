try{
    console.log(window);
    // console.log(global);
}catch(err){
    console.log("Error caught as window is not defined");
}

console.log("current Directory is: ",__dirname);
console.log("current filename is: ",__filename);
console.log("current node version: ",process.version);
console.log("current Operating system platform: ",process.platform);
console.log("Environment variable: ",process.env); //// In a real app, this would read your hidden database password :- const dbPassword = process.env.DATABASE_PASSWORD;


const math=require("./mathUtils");

console.log("add of 2+3=",math.add(2,3));
console.log("sub of 2-3=",math.sub(2,3));