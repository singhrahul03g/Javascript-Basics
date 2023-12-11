
const findLargest = (a,b,c) => {

    let largest = 0;

    if(a >= b && a >=c){
        largest = a;
    }else if(b>=c && b >=a){
        largest = b;
    }else{
        largest = c;
    }

    return largest;

}

console.log(findLargest(4,8,6));


