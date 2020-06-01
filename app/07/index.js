/**
 * @author Ruddá Beltrão
 * @description
 * 7. Linked List Intersection:
    If two requests on the queue have linked lists that intersect (like the example below),
    previous service could be improved to process only the difference between them.
    Write a method that receives two singly linked lists and return the intersecting node
    of the two lists (if exists). Note that the intersection is defined by reference, not value.
    (No need to change previous answer).
 */
function makeNode(){
    return {
        value: Math.floor(Math.random() * (100 - 1)) + 1,
        next: null
      };
}
function nodeList (length){
  let nodeList = makeNode();
  let currentNode = nodeList
  for (let i = 1; i < length; i++) {
    currentNode.next = makeNode();
    currentNode = currentNode.next
  }
  
  return nodeList;
}
function getNodeSize(node) {
    let size = 0;
    let _node = node;
    let print= '';

    while(_node.next !== null ) {
        print += (`${_node.value} ->`);
        size++;
       _node = _node.next;
    }
    
    console.log('\t' +print  + ' end \n');
    return size;
}
function getNode(node, index) {
    let size = 0;
    let _node = node;
    
    while(_node.next !== null && index > size ) {
        size++;
       _node = _node.next;
    }
    
    return _node;
}
function getNodeIntersectionIndex (node, node2, diff) {
         
    let _node = getNode(node, diff);;
    let size = 0;
    let _node2 = node2;
    
    while(_node.next !== null ) {
        
        if(_node.value === _node2.value){
            break;    
        }
       _node = _node.next;
       _node2 = _node2.next;
       size++;
    }
    
    return size + diff;
}
const q7 = {
    getNodeIntersection: function(nodeList1, nodeList2) {
        //since that a list must to be included into another list then
        // we need to check with nodeList has a most nodeList size
        let nodeList1_size = getNodeSize(nodeList1);
        let nodeList2_size = getNodeSize(nodeList2);
        //process.exit(0);
        if(nodeList1_size > nodeList2_size) {
            
            let node_index = getNodeIntersectionIndex(nodeList1, nodeList2, nodeList1_size - nodeList2_size);
            return node_index;

        } else {

            let node_index = getNodeIntersectionIndex(nodeList2, nodeList1, nodeList2_size - nodeList1_size);
            return node_index;

        }
    },
    run: function() {
        let a = makeNode();
        a.next = makeNode();
        a.next.next = makeNode();
       
        let l1 = nodeList(20);
        a.next.next.next = l1;
       
       
        let l2 = makeNode();
        l2.next = makeNode();
        l2.next.next = makeNode();
        l2.next.next.next = makeNode();
        l2.next.next.next.next = makeNode();
        l2.next.next.next.next.next = l1;
        
        let result = q7.getNodeIntersection( a, l2); 
        console.log(`there is a intersaction in ${result} position`);
        console.warn(`position is initialized from 0`);
    }
}

module.exports = q7;