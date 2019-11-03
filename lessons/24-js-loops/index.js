let sum = 0;
for (i = 0; i <= 1000; i++) {
    if(sum > 400){
        break;
    }
    sum += i;
}
alert(sum);

//show numbers from 0 to 10
for (i = 0; i < 11; i++) {
    console.log(i);
}

i = 0;
do{
    console.log(i);
    i++    
}while (i < 11);

i = 0;
while (i < 11){
    console.log(i);
    i++;
}


//Show numbers from 100 to 0
for (i = 100; i >= 0; i--) {
    console.log(i);
}

i = 100;
do{
    console.log(i);
    i--    
}while (i >= 0);

i = 100;
while (i >= 0){
    console.log(i);
    i--;
}


//Show even numbers between 0 and 100
for (i = 0; i <= 100; i++) {
    if (i % 2 == 0){
        console.log(i);
    }
}

i = 0;
do{
    if (i % 2 == 0){
        console.log(i);
    }
    i++    
}while (i <= 100);

i = 0;
while (i <= 100){
    if (i % 2 == 0){
        console.log(i);
    }
    i++;
}


//Produce the following output
for (i = 1; i <= 15; i++) {
    if (i == 1 || i == 15){
        console.log("```");
    }else{
        console.log(new Array(i).join('*'));
    }
}

i = 1;
do{
    if (i == 1 || i == 15){
        console.log("```");
    }else{
        console.log(new Array(i).join('*'));
    }   
    i++;
}while (i <= 15);

i = 1;
while (i <= 15){
    if (i == 1 || i == 15){
        console.log("```");
    }else{
        console.log(new Array(i).join('*'));
    }  
    i++;
}