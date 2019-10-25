function showEven () {
    for (i = 0; i <= 100; i += 2) {
        console.log(i);
    }
}

function showUser (name, age, phoneNumber, street, postalCode, married) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Phone number:", phoneNumber);
    console.log("Street:", street);
    console.log("Postal code:", postalCode);
    console.log("Married:", married);
}

//showUser("Jing Tu", 32, "1234567", "saskatoon", "S7XXXX", true);

const evenNumbers = function() {
    for (i = 0; i <= 100; i += 2) {
        console.log(i);
    }   
}

/*
for (j = 0; j < 5; j++) {
    console.log(`This is the ${j + 1} time`);
    evenNumbers();
}*/

/*
function fibonacci (maxNum) {
    let a = 0;
    let b = 1;
    let sum = 0;
    for (k = 0; k <= maxNum; k++) {
        temp = b;
        b = a + b;
        a = temp;
        console.log(`${a} `);
        sum += a;
        //console.log(`${sum} `);
    }
    console.log(sum);
}*/


function fibonacci(maxNum) {
    let previous = 0;
    let current = 1;
    let sum = 0;
    for (k = 0; k <= maxNum; k++) {
        temp = current;
        current = previous + current;
        previous = temp;
        console.log(`${previous} `);
        sum += previous;
        //console.log(`${sum} `);
    }
    console.log(sum);    
}


fibonacci(8);

let showName = function() {
    console.log("```");
    console.log("===========");
    console.log("= Jing Tu =");
    console.log("===========");
    console.log("```");
}

showName();
showName();