
// program to swap two variables

const swapVars = (a,b)=>{

    console.log(`a is ${a},b is ${b}`);
    const temp = a;
    a = b;
    b = temp;

    console.log(`a is ${a},b is ${b}`);
}

swapVars(3,6)



