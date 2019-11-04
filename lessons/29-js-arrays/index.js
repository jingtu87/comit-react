//Make an array of your siblings' names or your favorite movie characters' names.
let sublings = ['John', 'Jake', 'Make', 'Max'];
//Make an array of your parents' names.
let parents = ['tong', 'tu'];

//Combine these two arrays using concat().
let wholeName = sublings.concat(parents);
console.log(wholeName);

//Add your pets' names using push().
wholeName.push('Lulu');
console.log(wholeName);

//Reverse the order of the array.
wholeName.reverse();
console.log(wholeName);

//Access one of your parents' names using the square bracket notation.
console.log(wholeName[3]);

//Update the name of one of your parents using the index and square bracket notation
wholeName[2] = 'tong tong';
console.log(wholeName);

//Loop over the array and log each item to the console
for (key = 0; key < wholeName.length; key++) {
    console.log(wholeName[key]);
}

for (let value of wholeName) {
    console.log(value);
}
