
function whosPaying(names) {
    
  /******Don't change the code above*******/
      
      //Write your code here.

      names  = ['Pavel','David',"Moshe","Haim"]
      
       let namesLength = names.length;

       let randonName = names[Math.floor(Math.random())*namesLength];

       return(randonName + " is going buy lunch today!")

       


      
      
  
  
  /******Don't change the code below*******/    
  }


whosPaying();


var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
  numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}


const fibo = (a,b,c) => {
  

let counter = 1;

  while (true) {
    next = a+b;  console.log(next);

    a = b;  console.log(a);
  
    b=next; console.log(next);

    counter++;


    if (b > c ) {
      break;
    }
  }
  return counter;

}

console.log(fibo(2,5,19));



