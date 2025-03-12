for(let i=1;i<=5;i++){
    let pattern="";
    for(let j=1;j<=5;j++){
        if(i==1||i==3||i==5){
            pattern += "*";
        }else{
            if(j==1||j==5){
                pattern += "*";
            }else if(j==3){
                pattern += "*";
            }else{
                pattern += " ";
            }
        }
    }
    console.log(pattern);
}

// output:
// *****
// * * *
// *****
// * * *
// *****