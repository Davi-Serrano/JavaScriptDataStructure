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

//
function selectionSort(array){
    let min
    for(let i = 0; i < array.length - 1; i++){
        min = i
       
        for(let j = i + 1; j < array.length; j++){
            if( array[j] <  array[min]){
                min = j
            }
        }

        if(i !== min){

            let temp = array[j]
           
            array[i] = array[min]
           
            array[min] = temp
        }

    }
    return array
}


function insertionnSort(array){
    
    let temp 

    for(let i = 1; array.length; i++){

        for(var j = i -1; array[j] > temp && j - 1; j--){
            array[j + 1]  = array[i]
            
        }

        array[j+1] = temp
    }

    return array
}
