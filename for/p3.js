// Use a for loop to create the following pattern: output

//  ```markdown 
// *
// **
// *** 
// **** 
// ***** 
// ``` 

for (let i=1; i<=5; i++){
    let p = "";
    for (let j=1; j<=i; j++){
        p += "*";
    }
    console.log(p);
}