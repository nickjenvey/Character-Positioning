function countLetters(str) {
    let noSpaces = str.split(" ").join("").split("");

    let myObj = {};

    for (let i = 0; i < noSpaces.length; i++) {
      myObj[noSpaces[i]];
      if (!myObj[noSpaces[i]]) {
        myObj[noSpaces[i]] = [i];
      } else {
        myObj[noSpaces[i]].push(i);
      }
    }
  return myObj;
};

console.log(countLetters("lighthouse in the house"));