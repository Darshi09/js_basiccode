let ar = [1,32,33,45,77,3,6];

function count(ar) {
    let count=0;
    for (let i=0; i<ar.length; i++){
            count+= ar[i];
    }
    return count;
}
console.log(count(ar)); 