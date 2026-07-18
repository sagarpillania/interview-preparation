
const fs=require("fs").promises;
// fs.writeFileSync("node.txt", "we are just making file and fetch it later on.");
// fs.appendFileSync("node.txt","\nthis is second line");
// fs.appendFileSync("node.txt","\nthis is third line");
async function readFileAsync(){
    try{
        console.log("Starting reading file in Async fucntion");

        const contentFile=await fs.readFile("node.txt","utf-8");
        console.log("content is: ",contentFile);
    }
    catch(err){
        console.log("filed error: ",err);
        
    }
}

readFileAsync();
console.log("when i would be printed? See it yourself");


