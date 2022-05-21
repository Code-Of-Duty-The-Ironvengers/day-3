// functions
// arrays
// somewhat familiar with testing
const outsideWorld = true;

console.log("Hello");

function logsHello() {
  console.log("Hello from function");
}

logsHello();
logsHello();
logsHello();
logsHello();
logsHello();
logsHello();
logsHello();

console.clear();
const daiane = "Brazil";

const daianesFlag = getNationalFlag(daiane);
console.log("daianesFlag:", daianesFlag);

// function definition
function getNationalFlag(country) {
  switch (country) {
    case "Brazil": {
      //   console.log("🇧🇷");
      //   console.log("A LOT MORE STUFF");
      return "🇧🇷";
    }
    case "Morocco": {
      return "🇲🇦";
    }
  }

  console.log(
    "I SHOULD NOT BE ABLE TO GET THE DATA FROM THE VARIABLE ",
    outsideWorld
  );
}
//

function countsToSomeNumber(number) {
  for (let index = 0; index < number; index++) {
    console.log(index);
  }
}

countsToSomeNumber(100);
console.clear();

// arrays

const array = [1, 2, 3];

const hipHipArray = [[], function hello() {}, "1", 1, NaN, null, undefined, ""];
// we can use methods (indexOf)
//
for (let index = 0; index < hipHipArray.length; index++) {
  if (hipHipArray[index] === 1) {
    console.log("FOUND IT!", index);
  }
}

console.clear();

console.log([] === []);
console.clear();

let str = "";

str += "a"; // str = str + 'a'

const notThere = -1;
console.log(customIndexOf([1, 3, 1000, 1002], 2000)); // 2

function customIndexOf(array, value) {
  if (array.includes(value)) {
    return array.indexOf(value);
  }

  //   let indexOfElementWeAreLookingFor = -1;
  //   for (let i = 0; i < array.length; i++) {
  //     if (value === array[i]) {
  //       return i;
  //     } else if (i === array.length - 1) {
  //       return -1;
  //     }
  //   }

  //   return indexOfElementWeAreLookingFor;
  //   return notThere;
}

// function customIndexOf(array, value) {
//   // in order to get the index we need to navigate through the array until we find the correct element
//   for (let i = 0; i < array.length; i++) {
//     // now we are navigating
//     // we need to find the correct element
//     if (value === array[i]) {
//       return i;
//     }
//   }

//   return -1;
// }
