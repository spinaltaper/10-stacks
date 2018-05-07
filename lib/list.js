'use strict';

let Node=function(input){
    this.content(input);
    this.next;
}

let orderedList=function(){
    this.head=null;
    this.push=function(input){
        let newNode=new Node(input);
        newNode.next=this.head;
        this.head=newNode;
    }
    this.pop=function(){
        let output=this.head.content;
        this.head=this.head.next;
        return(output);
    }
}
