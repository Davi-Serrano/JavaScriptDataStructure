class Node{
    cosntrutor(value){
        this.value = value
        this.next = null

    }
}


class LinkedList {
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    //PUSH adiciona um novo item no finail lista,TAIL.
    push(value){
        const newNode = new Node(value)

        //Se a Lista estiver vazia esse o HEAD e o TAIL apontaram para o novo value como seu novo valor.
        if(!this.head){

            this.head = newNode
            this.tail = newNode
        }else{
        //Se a Lista não estiver vazia seu TAIL apontara para o novo calor e seu próximo item(this.next) apontará como null
        
            this.tail = this.talis.next = newNode
            this.tail = this.talis = newNode
        }

        //Sua posição na Lista é adionada + 1
        this.length++
        return this
    }

    //POP remove o último idem da Lista, o TAIL, e o NODE passa para o item de trás que terá seu this.next apontará como null
    pop(){
        //Se n tiver nenhum item na lista
        if(!this.head){
            return undefined
        }

        // TEMP e PRE apontarão para o valor do primeiro item da Lista, e percorream a Lista como o
        // PRE sempre apontando para o último valor de TEMP, até que temp.next esteja vazio,
        // ou seja quando chegar no último item da Lista o pre terá valor do novo TAIL pois estará no penúltimo item da Lista

    
        let temp = this.head
        let pre = this.head
        
        while(temp.next){
            pre = temp
            temp = temp.next
        }
        this.tail = pre
        this.tail.next = null

        this.length--
        //Se só tiver um item na lista os dados resantes serão apagados.
        if(this.length === 0){  
            this.head = null
            this.tail = null
        }
     
        return temp
    }

    //Unshift coloca um novo item no começo da lista, HEAD, o NODE deverá apontar para o item que antes o HEAD da lista.
    unshift(value){
        const newNode  = new Node(value)

        //Se não existir nenhum item na lista cria o nó normalmente
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }else{
       //Se existir aponta o NODE cara o HEAD, e transforma ele mesmo no novo HEAD.

            newNode.next = this.head
            this.head = newNode
        }

        this.length++
        return this
      
    }
}