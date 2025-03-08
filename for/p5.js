// today is tuesday. cuurent time is 10pm 30:38

let date = new Date();
let day = date.getDay();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
let dayArray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
day = dayArray[day];

console.log("date is: "+ date+ "Today is: "+day+ " Current Time is "+hour +" " +minute+" " +second);