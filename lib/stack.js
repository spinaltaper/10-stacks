import Node from './list';

import orderedList from './list';

let Stack=function(){
    this.content=new orderedList();
    this.push=function(input){
        this.content.push(input);
    }
    this.pop=new function(){
        return(this.content.pop())
    }
    this.peek=new function(){
        return(this.content.head.content)
    }
    this.isEmpty=new function(){
        if(this.content.head.content!==null)
        {return(true)}
        return(false);
    }
}