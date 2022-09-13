//Stack (Pilha)
class Node{
    constructor(valeu){
        this.value = valeu
        this.next = null
    }
}

class Stack{
    constructor(value){
        const newNode = new Node(value)
        this.top = newNode
        this.length = 1
    }

    push(value){
        const newNode =  new Node(value)

        if(this.length === 0){
            this.top = newNode
        }
        
        else {
            newNode.next = this.top
            this.top = newNode
        }

        this.length++
        return this
    }

}

