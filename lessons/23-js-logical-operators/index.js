let currentHour = prompt("Please enter the current hour(0~23)");
if (currentHour < 0 || currentHour > 23) {
    alert("The input is incorrect");
}else if (currentHour < 8 || currentHour >= 18) {
    alert("The hour is outside of office hours");
}else if (currentHour >= 8 && currentHour < 18) {
    alert("We are open");
}