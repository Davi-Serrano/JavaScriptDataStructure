//Esse algoritimo separa o array em dois e após isso ordena criar um array vazio e coloca os número ordenados dentro dele


//Essa função cria um novo array e insere os itens ordenadamente entre eles
function merge(array1, array2) {
    //Array vazio que ele cria
    let combined = []

    //Percorrerá o array1
    let i = 0
    //Percorrerá o array2
    let j = 0

    //Vai percorrer e comparar todos os itens dos arrays, qual for menor será inserido primeiro
    //Caso algum dos arrays fique vazio o loop se encerrará
    while(i < array1.length && j < array2.length) {

        //Se o item do array1 for menor ele que será inserido
        if(array1[i] < array2[j]) {
            combined.push(array1[i])
            i++
        } 
        //Senão o item do array2 que será inserido 
        else {
            combined.push(array2[j])
            j++
        }
    }

    //Quando acabar os itens do array2 mas ainda tiver itens no array1 para serem inserido esse loop será executada.
    while(i < array1.length) {
        combined.push(array1[i])
        i++
    }

    //Quando acabar os itens do array1 mas ainda tiver itens no array2 para serem inserido esse loop será executada.
    while(j < array2.length) {
        combined.push(array2[j])
        j++
    }
    return combined
}


//Separa o array pela metade e chama a função que ordenará eles
function mergeSort(array) {
    //Se somente existir um item no array ele já estará ordenado
    if(array.length === 1) return array


    //Pega o valor da metade de itens do array
    let mid = Math.floor(array.length/2)
    //Cria o array1
    let left = array.slice(0,mid)
    //Cria o array2
    let right = array.slice(mid)
    
    //Retorna um novo array ordenado
    return merge(mergeSort(left), mergeSort(right))
}

