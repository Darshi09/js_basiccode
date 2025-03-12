for(let i=1;i<=5;i++){
    let pattern="";
    if(i%2!=0){
        for(let j=1;j<=5;j++){
            pattern += "*";
        }
    }else{
        for(let j=1;j<=1;j++){
            pattern = "*";
        }
    }
    console.log(pattern);
}

// output:
// *****
// *
// *****
// *
// *****