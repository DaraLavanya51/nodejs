//function printstuff(stuff){
//console.log(stuff);
//}
//printstuff("Hello")



//in js it is also possible to assign a variables 

//var printstuff=function(stuff){			//A function that doesn't have a name is called anonymus function
//console.log(stuff);
//}

function mainfunction(anotherfun,val){				//we can also pass functions as arguments to another function
anotherfun(val)
}
mainfunction(function(stuff){console.log(stuff)},"World")    //or we can directly pass the function to the main function