
for(let i=1;i<=5;i++){
    let pattern="";
    for(let j=1;j<=5-i;j++){
        pattern += " ";
    }
    for(let j=1;j<=2*i-1;j++){
        pattern += "*";
    }
    console.log(pattern);
}

for(let i=5;i>=1;i--){
    let pattern="";
    for(let j=1;j<=5-i;j++){
        pattern += " ";
    }
    for(let j=1;j<=2*i-1;j++){
        pattern += "*";
    }
    console.log(pattern);
}

// output:
//     *
//    ***
//   *****
//  *******
// *********
// *********
//  *******
//   *****
//    ***
//     *