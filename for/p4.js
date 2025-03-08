// Detect Perfect Numbers A perfect number is a positive integer that is equal to the sum of its proper divisors (excluding the number itself). Write a program using a for loop to check if a given number is a perfect number. // Input: number = 28 // Output: 1 + 2 + 4 + 7 + 14 = 28

let n=496;
let sum=0;

for(let i=1;i<n;i++){
    if(n%i==0){
        sum+=i;
    }
}
if(sum==n){
    console.log(n+" Perfect Number");
}else{
    console.log(n+" Not a Perfect Number");
}