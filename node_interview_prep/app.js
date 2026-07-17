console.log("Hello we are starting node js today");
const fs=require("fs");

fs.writeFileSync("node.txt", "we are just making file and fetch it later on");

const content=fs.readFileSync("node.txt","utf-8");
console.log(content);