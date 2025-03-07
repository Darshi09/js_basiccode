// You have different tasks to do based on the time of day. Write an if-elseif condition to determine:

// If the time is before 7 AM, print "It's too early, sleep a bit more."
// If the time is between 7 AM and 10 AM, print "Time for breakfast and morning exercise."
// If the time is between 10 AM and 6 PM, print "Time to work or study."
// If the time is after 6 PM, print "Relax for the day."

// let time = "6PM";

// if (time <= "7AM") {
//     console.log("It's too early, sleep a bit more.");
// } else if (time >= "7AM" && time <= "10AM") {
//     console.log("Time for breakfast and morning exercise.");
// } else if (time >= "10AM" && time <= "6PM") {
//     console.log("Time to work or study.");
// } else {
//     console.log("Relax for the day.");
// }

let time = 18;

if (time <= 7) {
    console.log("It's too early, sleep a bit more.");
} else if (time >= 7 && time <= 10) {
    console.log("Time for breakfast and morning exercise.");
} else if (time >= 10 && time <= 18) {
    console.log("Time to work or study.");
} else {
    console.log("Relax for the day.");
}