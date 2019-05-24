function sortLines() {
  let newLines = [];
  let lines = ["line n°1", "bus n°24", "tramway n°3", "line n°2", "bus n°20", "tramway n°312", "line n°130", "bus n°28", "tramway n°20", "line n°101"];

// to get  only lines elements of array
  for (let i = 0; i < lines.length; i++) {
    if ( lines[i][0] == "l") {
      newLines.push(lines[i]);
    }
  }
  console.log(newLines);// it gives an array of lines
  console.log(newLines.sort()); // it gives an array of lines sorted Alphabetically


// to get into number position into the newLine array's elements
let numArr = [];

let a = newLines[0].slice(7);
let b = newLines[1].slice(7);
let c = newLines[2].slice(7);
let d = newLines[3].slice(7);

numArr.push(a);
numArr.push(b);
numArr.push(c);
numArr.push(d);

console.log(numArr);// it gives an array of numbers in newLine array elements

// function to sort out the numbers;
function sortNumArr(a, b) {
  return a - b;
};

numArr.sort(sortNumArr);
console.log(numArr); // it gives an array of numbers after sorting numerically

//Now finally, inserting the line element name to respective numbers

let finalLine = [];
let finalLineElements;

for(let i = 0; i < numArr.length; i++) {
  finalLineElements = "line n°" + numArr[i]; // it gives every element of the finalLine Array
  finalLine.push(finalLineElements); // inserts the finalLine elements into finalLine Array
}
console.log(finalLine);
}
