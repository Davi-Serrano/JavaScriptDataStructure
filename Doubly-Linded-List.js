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

    //PUSH Adiciona um novo item no finail lista,TAIL.
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

    //POP Remove o último iTem da Lista, o TAIL, que passara a (this.ser) o prev do i tem que será exluido.
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

    //UNSHIFT Adiciona um valor no inicio da Lsiat se torando o HEAD.
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

    //SHIFT Deleta o primeiro valor de Lista, HEAD,
    shift(){
        if(!this.head){
            return undefined
        }

        //Criamos uma variável que se tornará nosso HEAD atual que excluiremos
        let temp = this.head

        //Se a Lista só possuir um item deixamremos ela vazio, fazendo com que HEAD e TAIL apontem para NULL
        if(this.length === 1){
            this.head = null
            this.tail = null  
        }
        //Caso a Lista tenha mais de um item o next do HEAD atual se tornará o novo HEAD, e o prev do novo HEAD deverá pontar para NULL.
        else {
            //transforma o segundo item da lista no novo HEAD.
            this.head = this.head.next
            //Apaga o NODE (prev) que apontava para o antigo HEAD.
            this.head.prev = null

            //Apaga o next do Antigo HEAD que aponta para o novo HEAD.
            temp.next = null
        }
        
        this.length--
        return temp
        
    }
    

    //GET Retorna um item da Lista.
    get(index){
        if(index < 0 ||  index > this.length){
            return undefined
        }

        //Diferente da Linked List na Doubly Linked List temos o um ponteiro apontando para frente e para trás.
        //Isso faz com que possamos achar o algorismo mais rapidamente, como demonstraremos no código a seguir.
        
        
        //Variável que armazenará o valor de cada item da Lista até chegar no index desejado.
        let temp = this.head

        //Nesse algoritimo pegamos o valor desejado e dividimos o total de item do array por 2
        //Caso ele seja menor procuraremos ele a partir do HEAD, pois precisaremos percorrer menos item até chegar no index desejado.

        if(index < this.length / 2){
            for(let i = 0; i < index ; i++){
                temp = temp.next
            }
        }
        //Caso ele seja maior procuraremos ele a partir do TAIL e percorreremos a Lista de trás para frente o que antes não era possível na Linked List.
        else {
            temp = this.tail

            for(let i = - 1; i > index; i--){
                temp = temp.prev
            }
        }

        return temp
    }

    //SET Substitui o valor de um item na Lista.
    set(index, value){
        //pega o index desejado
        let temp = this.get(index)

        //Caso o item exita troca seu valor.
        if(temp){
            temp.value = value
           
            return true
        }

        return false
    }

    //INSERT insere um item na Lista.
    insert(index, value){
        if(index < 0 ||  index > this.length){
            return undefined
        }

        //Caso seja para inserir o item no HEAD.
        if(index === 0){
           return this.unshift(value)
        }
        
        //Caso seja para inserir o item no TAIL.
        if(index === this.length){
            return this.push(value)
        }


        //Para inserrirmos um novo item na Lista no index desejado iremos
        //Pegar o item que atualemnte está no local aonde colocaremos nosso novo item.
        //Após pegarmos o item chamaremos chamaremos ele de BEFORE
        //pegaremos o item que vem depois de BEFORE, o qual será o próximo item da Lista após  de inserirmos o novo Item
        //Chamaremos esse item de After e inserimos o novo item apontando seu this.prev para o BEFORE e seu this.netx para o AFTER.

        //Cria um novo item
        const newNode = new Node(value)

        
        //Pega o valor item que se encontra  no index aonde o novo valor será inserido.
        const before = this.get(index - 1)
        
        //Pega o próximo item do item será inserido.
        const after = before.next

        //Coloca o novo item no seu local desejado.
        before.next = newNode
        
        //Faz com o prev do novo item aponte para o item anterior.
        newNode.prev = before
        
        //Faz com o prev do novo item aponte para o próximo item .
        newNode.next = after

        //Faz com que o prev do item vem que depois do novo item inserido aponte para o novo item inserido.
        after.prev = newNode

        this.length++
        return true
    }

    //REMOVE remove um valor da Lista.
    remove(index){
        if(index < 0 ||  index > this.length){
            return undefined
        }

        //Remove o primeiro item.
        if(index === 0){
           return this.shift()
        }

        //Remove o último item.
        if(index === this.length){
            return this.pop()
        }

        //Pega o item que será excluido
        const temp = this.get(index)

        //Pega o item anterior do item que será excluido.
        const before = temp.prev
        
        //Pega o próximo item do item que será excluido.
        const after = temp.next

        //Faz com que o ponteiro next do item que será excluido aponte par NULL.
        temp.next = null
        //Faz com que o ponteiro PREV do item que será excluido aponte par NULL.
        temp.prev = null

        //Faz com que o item anterior retire seu ponteiro next que antes estava apontado para o item que será excluido e 
        //aponte para o item AFTER que é o item  que vem depois do item que será excluido.
        before.next = after

        //Faz com que o próximo item retire seu ponteiro prev que antes estava apontado para o item que será excluido e 
        //aponte para o item BEFORE que é o item  que vem antes do item que será excluido.
        after.prev = before

        this.length--
        
        return temp
    }
}