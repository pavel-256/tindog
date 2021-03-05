function whosPaying(names) {
  /******Don't change the code above*******/

  //Write your code here.

  names = ["Pavel", "David", "Moshe", "Haim"];

  let namesLength = names.length;

  let randonName = names[Math.floor(Math.random()) * namesLength];

  return randonName + " is going buy lunch today!";

  /******Don't change the code below*******/
}

whosPaying();

var numberOfBottles = 99;
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

const fibo = (a, b, c) => {
  let counter = 1;

  while (true) {
    next = a + b;
    console.log(next);

    a = b;
    console.log(a);

    b = next;
    console.log(next);

    counter++;

    if (b > c) {
      break;
    }
  }
  return counter;
};

console.log(fibo(2, 5, 19));

function fibonacciGenerator(n) {
  //Do NOT change any of the code above 👆

  //Write your code here:

  let array = [];

  array[0] = 0;

  array[1] = 1;

  let i = 2;

  if (n === 1) {
    array = [0];
  } else if (n === 2) {
    array = [0, 1];
  } else {
    array = [0, 1];
    while (i < n) {
      array.push(array[array.length - 2] + array[array.length - 1]);
      i++;
    }
  }

  return array;

  //Return an array of fibonacci numbers starting from 0.

  //Do NOT change any of the code below 👇
}

const result = fibonacciGenerator(4);
console.log(result);
