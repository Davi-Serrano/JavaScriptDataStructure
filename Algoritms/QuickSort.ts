function swap(array, firtsIndex, secondIndex){
    let temp = array[firtsIndex]
    array[firtsIndex] = array[secondIndex]
    array[secondIndex] = temp

}

function pivot( array, pivotIndex=0, endIndex=array.length-1){
    let swapIndex = pivotIndex
    for(let i = pivotIndex + 1; i <= endIndex; i++){
        if(array[i] < array[pivotIndex]){
            swapIndex++
            swap(array, swapIndex, i)
        }
    }

    swap(array, pivotIndex, swapIndex)
    return swapIndex
}

function quickSort(array, left=0, rigth=array.length-1){

    if(left < rigth){
        let pivotIndex = pivot(array, left, rigth)
        quickSort(array, left, pivotIndex-1)
        quickSort(array, pivotIndex+1, rigth)
    }

    return array    
}

