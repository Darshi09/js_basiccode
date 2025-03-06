// Write a JavaScript code using nested if-else statements to determine the grade of a student based on the following conditions:

// Grade "A" if score is 90 or above
// Grade "B" if score is between 80 and 89
// Grade "C" if score is between 70 and 79
// Grade "D" if score is below 70
// Assume the score is 75.

let score = 80; 

if (score >= 90) {
    grade = "A";
} else {
    if (score >= 80) {
        grade = "B";
    } else {
        if (score >= 70) {
            grade = "C";
        } else {
            grade = "D";
        }
    }
}

console.log("The student's grade is:", grade);

// The student's grade is: B