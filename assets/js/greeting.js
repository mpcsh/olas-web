/* function for the greeting */
var date = new Date();
var time_hour = date.getHours();
var greeting;
if (time_hour > 17) {
    greeting = "Good Evening!";
} else if (time_hour > 11) {
    greeting = "Good Afternoon!";
} else if (time_hour >= 0) {
    greeting = "Good Morning!";
} else {
    greeting = "Hello!";
}
var greet = document.getElementById("greeting").innerHTML = greeting;
 

/* code for the countdown timer */
// Set the date we're counting down to
var countDownDate = new Date("Apr 7, 2018 17:00:00").getTime();
    
// Update the count down every 1 second
var x = setInterval(function() {
        
    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now an the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result in the element with id="countdown"
    document.getElementById("countdown").innerHTML = days + " days " + hours + " hours "
        + minutes + " minutes " + seconds + "s ";
    
    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Enjoy the show!";
    }
}, 1000);