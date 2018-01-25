var date = new Date();
var time_hour = date.getHours();
var greeting;
if (time_hour > 18) {
    greeting = "Good Evening!";
} else if (time_hour > 11) {
    greeting = "Good Afternoon!";
} else if (time_hour >= 0) {
    greeting = "Good Morning!";
} else {
    greeting = "Welcome!";
}

document.write(greeting);