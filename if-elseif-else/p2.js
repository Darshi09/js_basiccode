// A student gets a score out of 100 in an exam. Write an if-elseif condition to determine:

// If the score is 90 or above, print "Grade A."
// If the score is between 75 and 89, print "Grade B."
// If the score is between 50 and 74, print "Grade C."
// If the score is below 50, print "Grade D."

let score = 80;

if (score >= 90) {
    console.log("Grade A.");
} else if (score >= 75 && score <= 89) {
    console.log("Grade B.");
} else if (score >= 50 && score <= 74) {
    console.log("Grade C.");
} else {
    console.log("Grade D.");
}