//Essa Estrutura de Dados tem seu fucncionamento semelhante a uma Fila, segue o conceito FIFO, First in First Out, 
//Ou seja o primeiro item a entrar é o primeiro a sair 

//Seu NODE só terá um ponteiro que apontará para o próximo item da fila (this.next)

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

//OS itens que destacaremos na Fila é o FIRTS e o LAST, igual o HEAD e TAIL na Linked List. 

class Queue {
    constructor(value){
        const newNode = new Node(value)
        this.first = newode
        this.last = newNode
        this.length = 1
    }

    //ENQUEUE adiciona um novo item na fila, o item adicionado sempre irá para o final da fila.
    enqueue(value){
        const newNode = new Node(value)

        //Se a Fila estiver vazia adicionará o novo item e ele passará a ser o novo FIRST e novo LAST. 
        if(this.length === 0){
            this.first = newNode
            this.last = newNode
        }
        //Caso já exista um item na Fila       
        else{

            //O item que está na útlima posição atual LAST terá seu next apontando para o novo item que será o novo LAST.
            this.last.next = newNode

            //Torná o novo item no LAST.
            this.last = newNode
        }

        this.length++
        return this
    }

    //DENQUEUE remove o primeiro item da Fila 
    dequeue(){
        if(this.length === 0) return undefined
        let temp = this.first

        //Se só tiver um item na Fila remove e deixa o last apontando para null.
        if(this.length === 1){
            this.first = this.
            temp.last = null
        }
        
        //O FIRST será exluido e o segundo item da Fila tornará o FIRST.
        else {

            //Torná o segundo item da Fila o novo FIRST.
            this.first = this.first.next

            //Retira o ponteiro do antigo FIRST. 
            temp.next = null
        }
        this.length--
        return temp
    }
}
