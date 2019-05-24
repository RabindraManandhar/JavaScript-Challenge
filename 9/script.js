function createArrays() {
  let object = {
    "coucou": "hello",
    "comment": "how",
    "va": "are",
    "tu": "you"
  };
  let arrOne = Object.getOwnPropertyNames(object);
  let arrTwo = Object.values(object);
  console.log(arrOne);
  console.log(arrTwo);
}

createArrays();
