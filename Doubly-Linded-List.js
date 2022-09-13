class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

// Doubly Linked List tem as mesmas características que o Linked List a única diferença será que ela terá mais um NODE que apontará para o item anterior (this.prev)
//Sendo assim cada item terá dois NODES um apontando para frente e outro para trás.
class DoublyLinkedList{
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    //PUSH adiciona um novo item no finail lista,TAIL.
    push(value){
        const newNode = new Node(value)

        //Se não tiver nenhum item da Lista será criado um item que sera o HEAD e o TAIL, com os dois NODES apontando para NULL.
        if(!this.head){
            this.head = newNode
            this.tail = newNode

        }
        //Se ja existir um item na Lista o novo item criado será o novo TAIL e seu NODE(prev) apontará para o antigo TAIL
        //Sendo assim o NEXT do antigo TAIL apontará para o novo TAIL.
        else{
            //Fara o NEXT do antigo apontar para o novo item colocado na Lista.
            this.tail.next = newNode  
            //Faz com que o NODE prev aponte para o antigo TAIL da Lista.
            newNode.prev = this.tail
            //Torná o item colocado na novo TAIl.
            this.tail = newNode   
        }
        this.length++

        return this
    }

    //POP remove o último iTem da Lista, o TAIL, que passara a (this.ser) o prev do i tem que será exluido.
    pop(){

        //Se a Lista estiver vazia não possível excluir.
        if(this.length === 0){
            return undefined
        }

        //Variável que que ser tonrará o TAIL. item será excluido.
        let temp = this.tail

        //Se tiver só um item na lista excluirá.
        if(this.length === 1){
            this.head = null
            this.tail = null
        }
        
        //Se não o TAIL.prev se tornará o novo TAIL.
        else{
            //Torna o TAIL.prev o novo TAIL 
            this.tail = this.tail.prev

            //torná o NODE (this.next), que apontava para o antigo TAIL como null.
            this.tail.next = null
            
            //Torna o NODE (this.prev) do antigo TAIL do novo TAIL, tirando toda a a utlima conexão que ele tinha com a Lista.
            temp.prev = null
        }

        this.length--
        return temp
    }

    //UNSHIFT adiciona um valor no inicio da Lsiat se torando o HEAD.
    unshift(value){
        const newNode = new Node(value)

        //Se a Lista estiver vazia cria um novo item.
        if(this.length === 0){
            this.head = newNode
            this.tail = newNode
        }

        //SE já tiver um item na Lista, o HEAD tera inserido no seu this.prev o novo valor criado que passará a ser seu novo HEAD.
        else {

            //Torna o valor do antigo HEAD como sendo o segundo item da Lista.            
            newNode.next = this.head
            
            //Faz com que o antigo HEAD aponte para o novo valor criado. 
            this.head.prev = newNode

            //Torná o novo valor o HEAD da Lista.
            this.head = newNode
        }

        this.length++
        return this
    }

    shift(){
        if(!this.head){
            return undefined
        }

        let temp = this.head

        if(this.length === 1){
            this.head = null
            this.tail = null  
        }
        
        else {
            this.head = this.head.next
            this.head.prev = null
            temp.next = null
        }
        
        this.length--
        return temp
        
    }
    

    get(index){
        if(index < 0 ||  index > this.length){
            return undefined
        }

        let temp = this.head

        if(index < this.length / 2){
            for(let i = 0; i < index ; i++){
                temp = temp.next
            }
        }

        else {
            temp = this.tail

            for(let i = - 1; i > index; i--){
                temp = temp.prev
            }
        }

        return temp
    }

    set(index, value){
        let temp = this.get(index)

        if(temp){
            temp.value = value
           
            return true
        }

        return false
    }

    insert(index, value){
        if(index < 0 ||  index > this.length){
            return undefined
        }

        if(index === 0){
           return this.unshift(value)
        }

        if(index === this.length){
            return this.push(value)
        }

        const newNode = new Node(value)

        const before = this.get(index - 1)
        const after = before.next

        before.next = newNode
        newNode.prev = before
        newNode.next = after
        after.prev = newNode

        this.length++
        return true
    }

    remove(index){
        if(index < 0 ||  index > this.length){
            return undefined
        }

        if(index === 0){
           return this.shift()
        }

        if(index === this.length){
            return this.pop()
        }

        const temp = this.get(index)

        const before = temp.prev
        const after = temp.next

        temp.next = null
        temp.prev = null

        before.next = after
        after.prev = before

        this.length--
        
        return temp
    }
}