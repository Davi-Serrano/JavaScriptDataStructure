//Recursion é quando reutilizamos uma funcção, chamamos ela de volta até não precisar mais ser chamada


//Call Stack, não é um exemplo de recursion, mas podemos observar um comportamento semelhante, pois primeiro será chamado a função funcOne, mas a primeira ser executada
//é a função Trhee


function funcThree(){
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


////Fatorial é o exemplo mais comum de recursion pois como o exemplo mostra abaixo o resultado de um número fatorial é sempre ele mesmo vezes o seu
// numero anterior fatorial isso se repetirá até chegar no número 1 que é a base.

//4! = 4 * 3 * 2 *1
//4! = 4 * 3!
//         3! = 2! * 1
//              2! = 2 * 1 
//                       1 = 1 * 1 

//Exemplo que retorna o valor fatorial de n fatorial.
function factorial(n){
    
    if(n === 1) return 1
    
    return n * factorial(n-1)
}
