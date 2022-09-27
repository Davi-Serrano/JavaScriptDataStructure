//Nesse algoritimo ele ordena os itens do array de uma maneira um pouco diferente
//ele irá analisar o primerio item do array em ralação aos outros e depois colocará os menores à sua esquerda e os maiores à sua direita
//feito isso ele ordenará os itens da esquerda depois os da direita e fará assim com que o array esteja ordenado.

//Esse algoritimo é divido em três funções:

//Swap - Essa função mudará a posição do primeiro item com o segundo. se quisermos que o maior número fique a direita colocaremos no lugar de secondIndex e
// nosso primerio indice do array como firtsIndex
//Caso queiramos que o item fique á esquerda passamos ele como o firtsIndex e o primerio item do array como secondIndex
//O primerio parâmetro sempre será o array que desejamos usar o quickSort

function swap(array, firtsIndex, secondIndex){
    let temp = array[firtsIndex]
    array[firtsIndex] = array[secondIndex]
    array[secondIndex] = temp

}

//Pivot -Irá percorrer todo o array e vai analisar qual item é maior que o primerio item do array, se for adicionará +1 ao SwapIndex e colocará o item à direita 
// caso não seja chamará a função swap novamente que colocará o item à esquerda.

function pivot( array, pivotIndex=0, endIndex=array.length-1){
    //Primeiro index do array
    let swapIndex = pivotIndex
    
    //Percorerrá todo o array menor o último item.
    for(let i = pivotIndex + 1; i <= endIndex; i++){
        
        //Se o item posterior for maior que o primerio item do array chamrará a função swap
        if(array[i] < array[pivotIndex]){
            //Esse código abaixo fará com que o menor item do array fique à esquerda do primeiro indice
            swapIndex++
            swap(array, swapIndex, i)
        }
    }

    //Esse código abaixo fará com que o maior item do array fique à direita do primeiro indice.
    swap(array, pivotIndex, swapIndex)
    return swapIndex
}

//Finalmente a função QuickSort ordenará os itens do array tanto o da esquerda quando o da direita.
function quickSort(array, left=0, rigth=array.length-1){

    //Só executará a função se o  array n estiver vazio 
    if(left < rigth){
        //Chama a função pivot que coloca os itens menores esquerda do antigo primeiro indice do array .
        let pivotIndex = pivot(array, left, rigth)
        //Ordena os itens à esquerda
        quickSort(array, left, pivotIndex-1)
        //Ordena os itens à direita
        quickSort(array, pivotIndex+1, rigth)
    }

    return array    
}

