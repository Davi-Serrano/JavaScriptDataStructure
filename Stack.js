//Stack (Pilha) 

//Funaciona como uma pilha tem o contceito FIFO, First In First Out, aonde o primeiro item a entrar é primeiro a sair
//Seu NODE apontará só para frente (this.next) semelhante ao Linked List
class Node{
    constructor(valeu){
        this.value = valeu
        this.next = null
    }
}

//Só possuirá o TOP semelhante ao HEAD do Linked List o qual sempre apontará para o item mais que foi inserido na Pilha.
class Stack{
    constructor(value){
        const newNode = new Node(value)
        this.top = newNode
        this.length = 1
    }

    //PUSH Adiciona um novo item na pilha que será o novo top
    push(value){
        const newNode =  new Node(value)

        //Se a Pilha estiver vazia somente será adionado top para o novo valor.
        if(this.length === 0){
            this.top = newNode
        }
        //Se a Pilha já possuir um item o novo item inserido apontará para o TOP atual como sendo seu próximo item da Pilha.
        //Após isso será o novo valor inserido será o novo TOP
        else {
            //Faz com que o novo item aponte para o TOP atual
            newNode.next = this.top
            
            //Transforma o novo item no TOP atual
            this.top = newNode
        }

        this.length++
        return this
    }

    //POP Retira o top da Pilha. 
    pop(){
        if(this.length === 0) return undefined

        //TEMO terá o valor do TOP atual o qual será exlcuido.
        let temp = this.top
        
        //Transforma o item que vem antes do TOP como o novo TOP.
        this.top = this.top.next
        
        //Retira o ponterio de do antigo TOP (this.next) que agora aponta para NULL. 
        temp.next = null
        
        this.length--
        return temp
    }

}

