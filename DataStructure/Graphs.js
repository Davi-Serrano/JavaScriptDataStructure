//Graphs é quando fazemos conexões entre os itens e para armazenarmos sua localização
//Um exeplo de uso de Graphs são seus amigos na redes socias aonde o amigo do seu amigo poderá ser recomendado para vc seguir pois ele terá uma conexão com vc através 
//de seu amigo, então vc tem uma conexão com seu amigo e ele tem uma com você, o amigo de se amigo não tem nenhuma conexão direta com vc mas tem com seu amigo. 

class Graphs{
    //Representaremos o local de armazenamento de graphs através do adjacentList.
    constructor(){
        this.adjacentList = []
    }

    //Crirá o item a ser conectado no Graph.
    addVertex(vertex){
        //Somente criará se o item ainda não existir .
        if(!this.adjacentList[vertex]){
            this.adjacentList[vertex] = []
            return true
        }

        return false
    }

    addEdge( vertex1, vertex2 ){
        if(this.adjacentList[vertex1] && this.adjacentList[vertex2]){
            this.adjacentList[vertex1].push(vertex2)
            this.adjacentList[vertex2].push(vertex1)
        }
    }

    removeEdge(vertex1, vertex2){
        if(this.adjacentList[vertex1] && this.adjacentList[vertex2]){
            this.adjacentList[vertex1] = this.this.adjacentList[vertex1]
                .filter(v => v !== vertex2)

                this.adjacentList[vertex2] = this.this.adjacentList[vertex2]
                 .filter(v => v !== vertex1)
        }
    }

    removeVertex(vertex){
        if(!this.adjacentList[vertex]) return undefined

        while(this.adjacentList[vertex].length){
            let temp = this.adjacentList[vertez].pop()
            this.removeEdge(vertex, temp)
        }

        delete this.adjacentList[vertex]
        return this
    }

}
