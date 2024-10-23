console.log("user 1 made a request");
setTimeout(callback,4000);
console.log("user 2 made a request");
setTimeout(callback,4000);
console.log("user 3 made a request");
setTimeout(callback,4000);

function callback(){
console.log("Queried the database and delivered the data in 5 secs");
}

