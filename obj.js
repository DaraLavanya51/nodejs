console.log(__filename);
console.log(__dirname);


function printstuff(){
console.log("This was from setTimeout");
}
setTimeout(printstuff,5000);


function printstufff(){
console.log("This was from setInterval");
}
setInterval(printstufff,2000);