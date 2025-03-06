// Store the name, school, grade, section, roll no and the marks scored by the student in 3 subjects
//        Print the report card of the student (You can make it look nice by using some keyboard symbols)
let name="darshi"
let school="Indus"
let grade=10
let section="B"
let roll=156
let maths=95
let science=87
let hindi=91

let total = (maths+science+hindi)
let percentage = (total/300)*100
console.log("-------------------------------------------------")
console.log("Name: "+name)
console.log("School: "+school)
console.log("Grade: "+grade)
console.log("Section: "+section)
console.log("Roll No: "+roll)
console.log("-------------------------------------------------")
console.log("Maths: "+maths)
console.log("Science: "+science)
console.log("Hindi: "+hindi)
console.log("-------------------------------------------------")
console.log("Total Marks: "+total)
console.log("Percentage: "+percentage+"%")
console.log("-------------------------------------------------")
if(percentage>=90){
    console.log("Grade: A")
}
else if(percentage>=80){
    console.log("Grade: B")
}
else if(percentage>=70){
    console.log("Grade: C")
}
else if(percentage>=60){
    console.log("Grade: D")
}
else{
    console.log("Grade: F")
}
console.log("-------------------------------------------------")

