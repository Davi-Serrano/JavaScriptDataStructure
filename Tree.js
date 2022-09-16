class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
//O(log n)
class BST {
    constructor(value){
        const newNode = new Node(value)
        this.root - null
    }

    insert(value){
        const newNode= new Node(value)

        if(!this.root){
            this.root = newNode
            return this 
        }

        let temp = this.root

         while(true){
            if(newNode.value === temp.value) return undefined
            if(newNode.value < temp.value){
                if(temp.left === null){
                    temp.left = newNode
                    return this
                }
                temp = temp.left
            } else{
                if(temp.right === null){
                    temp.right = newNode
                    return this
                }

                temp = temp.right 
            }

         } 
    }

    contains(value){
        if(this.root === null){
            return undefined
        }

        let temp = this.root

         while(true){
            if(value === temp.value) return temp
            if(value < temp.value){
                if(temp.left === null){
                   
                    return this
                }
                temp = temp.left
            } else{
                if(temp.right === null){
                    temp.right = newNode

                    return this
                }

                temp = temp.right 
            }

         } 

        
    }

}