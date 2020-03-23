var myName = "Oma";
var courses = ["HTml","Css","Javascript","C#","PHP","Design"];
var x = courses.length;


console.log( "Hello I am " + myName)
console.log("These are my registered courses : " + courses)
console.log()

if (x % 2 === 0){
    for ( var i = 0; i<= 200 ;i++){
      if (i %2 === 0)
      console.log(i)
    }

}
else{
    for ( var i = 0; i<= 200 ;i++){
        if (i %2 !== 0)
        console.log(i)}

}



