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

    //UNSHIFT coloca um novo item no começo da lista, HEAD, o NODE deverá apontar para o item que antes o HEAD da lista.
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

    //SHIFT remove o primeiro valor da Lista o HEAD.
    shift(){
        //Se a Lista estiver vazia
        if(!this.head){
            return undefined
        }

        //TEMP apontará para o valor a ser excluido, que será nosso HEAD.
        let temp = this.head

        //Torna o segundo item da lista o HEAD da Lista.
        this.head = this.head.next
        this.length--

        //Se tiver somente um item na lista antes do SHIFT deixará a lista vazia e apontará o TAIL para null.
        if (this.length === 0) {
            return this.tail = null
        }

        //Remove o ponteiro do temp o antigo HEAD tirando toda a conexão dele com a lista.
        temp.next = null
        
        return temp
    }

    //GET pega um item da Lista de acordo com seu index.
    get(index){
    
        //Só poderam ser encontrados indexes maiores ou iguais a zero e menores que o a quantidade total de itens que a lista possui 
        if(index < 0 || index >= this.length){
            return undefined
        }

        //temp rerá como valor inicial o HEAD e percorrerá toda a lista até chegar no item antes do index desejado, quando chegar retornára o próximo valor
        //retornando o item  do index desejado .
        let temp = this.head

       for(let i = 0; i < index; i++){
            temp = temp.next
       }

       return temp
    }

    //SET subistui um valor por outro na lista, passando o index que deseja substituir e o novo valor como parâmetros.
    set(index, value){
        //Reutilizamos o métodoo GET para achar o index desejado.
        let index = this.get(index)

        //Verificamos se o index existe, caso exista substituimos pelo novo valor
        if(temp){
            temp.value = value

            return true
        }

        //Retornamos falso caso o index não exista.
        return false
    }

    //INSERT insere um novo valor na Lista  na posição do index desejado sem excluir ou substituir nenhum item da Lista.
    insert(index, value){

        //Se o index for o primerio item realizará o método UNSHIFT.
        if(index === 0){
           return this.unshift(value)
        }

        //Se o index for o ultimo item realizará o método PUSH.
        if(index === this.length){
             return this.push(value)
        }

        //Só poderam ser encontrados indexes maiores ou iguais a zero e menores que o a quantidade total de itens que a lista possui 
        if(index < 0 || index >= this.length){
            return false
        }
    
        //Cria um novo nó
        const newNode = new Node(value)

        //Pega o item anterior do index desejado.
        const temp = this.get(index - 1)

        //Faz com que o NEXT aponte para o próximo item da Lista.
        newNode.next = temp.next

        //Faz com que o item anterior do index desejado aponte seu NEXT para o novo NODE criado.
        temp.next = newNode

        this.length++
        return true

    }


    //REMOVE remove um item da lista de acordo com o index desejado.
    remove(index){

        //Se o index for o primerio item realizará o método SHIFT.
        if(index === 0){
            return this.shift()
        }

        //Se o index for o ultimo item realizará o método POP.
        if(index === this.length){
            return this.pop()
        }

        //Só poderam ser encontrados indexes maiores ou iguais a zero e menores que o a quantidade total de itens que a lista possui 
        if(index < 0 || index >= this.length){
            return undefined
        }

        //variavialel before aponta para o item anterior que será removido da Lista.
        let before = this.get(index - 1)

        //TEMP aponta para o item que será rtemovido da Lista.
        let temp = before.next

        //Faz com que o NODE (next) aponte para o valor que vem depois do item que será removido.
        before.next  = temp.next

        //Faz com que o NODE do valor removido aponte para null.
        temp.next = null
        
        this.length--
        
        return temp
    }


    //Esse método é o mais comlicado, ele inver a ordem da Lista, ou se ja o HEAD passa a ser o TAIl e o TAIL passa a ser o HEAD.
    reverse(){
        //TEMP guarda o valor de HEAD,
        let temp = this.head

        //Transforma o HEAD em TAIL,
        this.head = this.tail

        //Transforma on TAIL em HEAD com o valor de TEMP que armazena o valor antigo da cabeça,
        this.tail = temp

        //Para fazermos os NODES apontarem para trás precisamos de três variáveis que iram percorrer pelo array mudando de posições entre si.
        
        //Variável NEXT é igual ao proximo item da lista, o valor para qual o NODE está sendo apontado no momento.
        let next = temp.next
        
        //Variável PREV igual ao item anterior ou seja para qual o NODE apontará quando a Lista for revertida.Ele começa com null pois non final ela será a TAIL.
        let prev = null

        //Precisaremos da Varialvel TEMP para acesar o item que está sendo apontando no momento antes da Lista ser revertida.
        //Como já declaramos o TEMP  na primeira linha desse código usaremos o temp.next

        for(let i = 0; i < this.length; i++){

            //faz a redeclação do valora atual do NEXT
            next = temp.next

            //Faz com que o NODE sejá apontado para o item anterior
            temp.next = prev
            
            //Declara o item anteior como sendo o novo item pra quem o NODE apontará (temp.next).
            prev = temp

            //Decalra o novo item que sofrerá a mudança no seu NODE.
            temp = next
        }

        return this
    }
}