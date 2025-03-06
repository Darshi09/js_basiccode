let num = 15;

if(num%3==0 && num%5==0){
    console.log("BuzzCandy");
}else if(num%3==0){
    console.log("Buzz");
}else if(num%5==0){
    console.log("candy");
}else{
    console.log(num+" is not divided by 3 and 5 ");
}