console.log("Hello we are starting node js today");
const fs=require("fs");

fs.writeFileSync("node.txt", "we are just making file and fetch it later on.");

const content=fs.readFileSync("node.txt","utf-8"); 
console.log(content);

fs.appendFileSync("node.txt","\nthis is second line");
fs.appendFileSync("node.txt","\nthis is third line");
const updatedContent=fs.readFileSync("node.txt","utf-8");
console.log(updatedContent);
// fs.unlinkSync("node.txt"); //it will delete the file

// how to delte the second line

const allLines=updatedContent.split("\n");
const filteredLine=allLines.filter((line)=>!line.includes("this is second line"));
const updatedLineAfterDeletion=filteredLine.join("\n");
fs.writeFileSync("node.txt",updatedLineAfterDeletion);
const finalUpdate=fs.readFileSync("node.txt","utf-8");
console.log("------------------------------");

console.log(finalUpdate);



//fs is a file system which is used to create,read,update,delete files in our syste that is our computer(hard drive).
// When Node reads a file from a hard drive, it natively reads it as raw binary data (zeros and ones). If you leave out 'utf-8' and just run fs.readFileSync('backend-log.txt'), Node will print a <Buffer ...> filled with hexadecimal numbers. Passing 'utf-8' acts as the decoder that translates those numbers back into readable text.

