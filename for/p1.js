// Print the sum of those numbers that are divisible by 2 or 5 between a range of 1 and 15.

let count = 0;
for (let i=1; i<=15; i++){
    if(i%2==0 || i%5==0){
        // console.log(i);
        count++;
    }
}
console.log(count)