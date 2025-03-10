for(let i=1;i<=5;i++){
    let pattern="";
    for(let j=1;j<=i;j++){
        if(i%2!=0){
            pattern += "*";
        }else{
            pattern += j;
        }
    }
    console.log(pattern);
}