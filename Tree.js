class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}
//Uma Binary Search Tree(árvore) O(log n) é representando como um item que tem duas conexões uma apontando pro LEFT e outra pro RIGHT.
//Se o item que for inserido for maior que o que já temos na árvore ele será posicionado à direita (RIGHT) se for menor à esquerda (LEFT).
//Se ao posicionarmos o item já tiver um item nesse lugar repetiremos o mesmo processo discrito acima até que o ao posionarmos RIGHT ou LEFT seja igual a NULL.

//Todas as operações feitas na TREE são de velocidade O(log N).
class BST {
    //A tree terá um root que representa o primeiro valor que foi inserido na árvore
    constructor(value){
        const newNode = new Node(value)
        this.root - null
    }

    //INSERT insere um novo valor na TREE.
    insert(value){
        const newNode = new Node(value)

        //Se não existe ROOT o item inserido será o novo ROOT.
        if(!this.root){
            this.root = newNode
            return this 
        }

        let temp = this.root

        //Enquanto for TRUE.
         while(true){
             //Se já existir um valor igual retorna undefinded, mas deveria adicionar um count.
            if(newNode.value === temp.value) return undefined
             
             //Se o novo item inserido for menor do que o valor que está sendo interado retornaremos o próximo item. 
            if(newNode.value < temp.value){
                
                //Se não existir um item adicionaremos um o novo item.
                if(temp.left === null){
                    temp.left = newNode
                    return this
                }
                
                //Se existir temp será igual ao próximo item
                temp = temp.left
            } 
             //Se o novo item inserido for maior do que o valor que está sendo interado retornaremos o próximo item.
             else {
                
                 //Se não existir um item adicionaremos um o novo item.
                if(temp.right === null){
                 
                    temp.right = newNode
                    return this
                }
                 //Se existir temp será igual ao próximo item.
                temp = temp.right 
            }

         } 
    }


    //CONTAINS retorna um valor, que passamos, de dentro da árvore usando o método divide and conquer.
    contains(value){
        
        //Se a tree ainda não tiver nenhum item retorne undefined.
        if(this.root === null) return undefined

        //TEMP será a nossa variável que percorrerá a tree até acharmos o valor desejado.
        let temp = this.root

        //Usaremos um loop while e em enquanto temp existir repetiremos o código abaixo. 
         while(temp){

            //Se o valor que procuramos for menor que o próximo item a esquerda então ele deverá continuar indo pra esquerda,
            //Se for maior deverá ir para direita
            //lembrando que uma das caracteristica da Binary Search Tree é armezar o valor menor do item a esquerda e o maior a direita. 
            //Após isso o a variável temp será o novo o próximo valor definido ou TEMP.left ou TEMP.rigth e assim o loop se repetirá com TEMP tendo um novo valor

            //Se o valor for menor vai pra esquerda e TEMP assumirá o valor do próximo item a esquerda.
            if(value < temp.left) {
                temp = temp.left
            }

            //Se o valor for maior vai pra direita e TEMP assumirá o valor do próximo item a esquerda.
            else if(value > temp.right){
                temp = temp.right
            } else{
                return true
            }

            //Caso TEMP.left ou TEMP.rigth seja igual a null o temp não existira.
        } 
          return false
    }

    //minValueNode vai retorna o valor mais a esquerda a partir de um NODE.
    minValueNode(currentNode){

        //Enquanto existir um item a esquerda o currentNODE será igual ao item da esquerda .
        while(currentNode.left != null){
            currentNode = currentNode.left
        }

        return currentNode
    }

}
