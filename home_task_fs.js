var fs=require("fs");
content="\nHello";
fs.appendFile("demo.txt", content, function(err){
    if(err) throw new Error;
});
console.log("File created");