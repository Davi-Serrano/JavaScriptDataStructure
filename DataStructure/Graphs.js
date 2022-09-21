//Graphs é quando fazemos conexões entre os itens e para armazenarmos sua localização
//Um exeplo de uso de Graphs são seus amigos na redes socias aonde o amigo do seu amigo poderá ser recomendado para vc seguir pois ele terá uma conexão com vc através 
//de seu amigo, então vc tem uma conexão com seu amigo e ele tem uma com você, o amigo de se amigo não tem nenhuma conexão direta com vc mas tem com seu amigo. 

class Graphs{
    //Representaremos o local de armazenamento de graphs através do adjacentList.
    constructor(){
        this.adjacentList = []
    }

    //Criará o item a ser conectado no Graph.
    //Ex: adjacentList: [
    //      A: [ ]
    //    ]
    addVertex(vertex){
        //Somente criará se o item ainda não existir .
        if(!this.adjacentList[vertex]){
            this.adjacentList[vertex] = []
            return true
        }

        return false
    }

    //Faz a conexões dos itens passados como parâmetros.
     //Ex: adjacentList: [
    //      A: [ "B"],
    //      B  [ "A"],
    //    ]
    addEdge( vertex1, vertex2 ){
        //Somente adicionará se os dois itens existirem.
        if(this.adjacentList[vertex1] && this.adjacentList[vertex2]){
            this.adjacentList[vertex1].push(vertex2)
            this.adjacentList[vertex2].push(vertex1)
        }
    }

    //Removerá as conexões entre dois itens.
    removeEdge(vertex1, vertex2){
        //Somente fará a conexão se os dois itens existirem.
        if(this.adjacentList[vertex1] && this.adjacentList[vertex2]){
            
            //Retira a conexão do item1 um excluindo o item2 de suas conexões,mas mantendo todas as outras.            
            this.adjacentList[vertex1] = this.this.adjacentList[vertex1]
                    .filter(v => v !== vertex2)
            
            //Retira a conexão do item2 um excluindo o item1 de suas conexões,mas mantendo todas as outras.            
            this.adjacentList[vertex2] = this.this.adjacentList[vertex2]
                    .filter(v => v !== vertex1)
        }
    }

    //Remoce um item do Graph.
    removeVertex(vertex){
        //Somente removerá o item se ele existir.
        if(!this.adjacentList[vertex]) return undefined
    
        //Para remover o item primeiro ele removerá todas as suas conexões de entre os outros itens.
        
        //Enquanto ainda houver conexnões dentro do item ele removerá o último item, e atribuirá seu valor a TEMP.
        //Após isso usará o método removeEdge para que posso remover todas as conexões. 
        
        while(this.adjacentList[vertex].length){
            let temp = this.adjacentList[vertex].pop()
            this.removeEdge(vertex, temp)
        }

        //Após isso deletará  o item.
        delete this.adjacentList[vertex]
        return this
    }

}
