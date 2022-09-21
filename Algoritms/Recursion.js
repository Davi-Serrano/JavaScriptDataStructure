//Call Stack

function funcThre(){
    console.log("Three")
}

function funcTwo(){
    funcThre()
    console.log("Two")
}

function funcOne(){
    funcTwo()
    console.log("One")
}


//Factorial

//4! = 4 * 3 * 2 *1
//4! = 4 * 3!
//         3! = 2! * 1
//              2! = 2 * 1 
//                       1 = 1 * 1 


function factorial(n){
    if(n === 1) return 1

    return n * factorial(n-1)
}