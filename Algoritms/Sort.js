//Sort é um algoritimo que ordena em ordem crescente os numeros de seu array

//Nesse algorítimo iniciaremos pelo primeiro item do array e comparemos com o próximo item do array se ele for maior trocaremos suas posições no array,
//após isso compararemos com o próximo item e fazeremos o mesmo processo todos os itens do array estiverem ordenados. 
function bubbleSort(array){

    //o primeiro loop começaremos no último item do array até  chegar no primeiro.
    for(let i = array.length - 1; i > 0; i--){
       
        //No segundo loop j começara no 0 e irá continuar até i chegar no último item do array.
        for(let j = 0; j < i; j++){
            
            //Se o item anterior for maior do que o próximo mudaremos a ordem deles.
            if(array[j] > array[j+1]){
              
                //Na variável TEMP será atribuido o maior valor. 
                let temp = array[j]
                
                //Aqui mudaremos a posição do item menor colocando ele no lugar aonde estava o item maior.
                array[j] = array[j + 1] 
             
                //Aqui mudaremos a posição do item maior colocando ele no lugar aonde estava o item menor.
                array[j + 1] = temp
            }   
        }
    }

    return array
}

//No SELECTION SORT nós percorreremos o array até acharmos o menor valor, após acharmos o menor valor ele será colocado em na primeira posição do array
//e isso se repetirá so que dessa vez não percorreremos o primeiro item ja que ele sabemos que ele está na posição correta, após isso repetiremos o mesmo processo
//sem fazer a iteração no item anterior que ja foi posicionado no lugar certo.
function selectionSort(array){
    
    //variável MIN guardará o menor valor do array.
    let min
    
    //Nesse primeiro loop iteraremos por todo o array até chegar na última posição
    for(let i = 0; i < array.length - 1; i++){
        min = i
       
        //Esse loop percorrerá o array e achará o menor valor contido nele, após isso atribuirá a min o menor valor.
        for(let j = i + 1; j < array.length; j++){
            if( array[j] <  array[min]){
                min = j
            }
        }
        
        //Somente mudará a posição do array se o index atual for diferente do i, pois se não colocaremos o mesmo item no mesmo lugar.
        if(i !== min){

            //valor que será substituido.
            let temp = array[i]
    
            //coloca o menor valor na sua posição correta.
            array[i] = array[min]

            //coloca o item que estva na posição do novo MIN na posição aonde o novo MIN estava.
            array[min] = temp
        }
    }
    return array
}

//NO INSERTION SORT ele ira comparar sempre numero que vem uma posição depois e se for menor mudará de posição.
//A variavel TEMP representará o atual valor que está em comparação com o array[j] o item anterior.
function insertionnSort(array){
    let temp 
    
    //O primerio loop irá  percorrer todo o array com array[i] sendo representando como o valor TEMP o valor atual.
    for(let i = 1; array.length; i++){
        temp = array[i]
        
     //Nesse segundo loop array[j] representa o valor anterior e sempre estará em uma posição antrior que o array[i] a não ser se array[i] esteja na primeira posição   
        for(var j = i -1; array[j] > temp && j > -1; j--){
            //troca a posição pois do anteior pelo atual pois é menor
            array[j + 1]  = array[i]
        }
        //troca a posição do atual pelo anteior pois é menor
        array[j+1] = temp
    }

    return array
}
