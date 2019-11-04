let moviesName = prompt("Please input 3 movies name, separated by comma");

let moviesArr = moviesName.split(';');
console.log(moviesArr);

let reverseStr = prompt("Please input a string to reverse");
alert(reverseString(reverseStr));

function reverseString(originalStr) {
    let tempArr = originalStr.split('');
    tempArr.reverse();
    return tempArr.join('');
}