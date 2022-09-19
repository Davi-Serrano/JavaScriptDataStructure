class Graphs{
    constructor(){
        this.adjascentList = []
    }

    addVertex(vertex){
        if(!this.adjascentList[vertex]){
            this.adjascentList[vertex] = []
            return true
        }

        return false
    }

    addEdge( vertex1, vertex2 ){
        if(this.adjascentList[vertex1] && this.adjascentList[vertex2]){
            this.adjascentList[vertex1].push(vertex2)
            this.adjascentList[vertex2].push(vertex1)
        }
    }

    removeEdge(vertex1, vertex2){
        if(this.adjascentList[vertex1] && this.adjascentList[vertex2]){
            this.adjascentList[vertex1] = this.this.adjascentList[vertex1]
                .filter(v => v !== vertex2)

                this.adjascentList[vertex2] = this.this.adjascentList[vertex2]
                 .filter(v => v !== vertex1)
        }
    }
}
