function getName(node) {
    return node.name
}

function headNode(list, col) {
    return col[list]
}

function next(node, col) {
    return col[node.next]
}

function nodeAt(index, list, col) {
    let node=col[list]
    for (let x=0;x<index;x++) {
        node=next(node,col)
    }
    return node
}

function addressAt(index, list, col) {
    return (index> 0) ? nodeAt(index-1, list, col).next : list
}

function indexAt(theNode, col, list) {
    let node=col[list]
    let x=0
    while (node.next) {
        if (node === theNode) {return x}
        node=next(node,col)
        x++
    }
    return null
}

function insertNodeAt(index, newNodeAddress, list, col) {
    let beforeNode = nodeAt(index-1, list, col)
    col[newNodeAddress].next=beforeNode.next
    beforeNode.next=newNodeAddress
}

function deleteNodeAt(index, list, col) {
    let beforeNode = nodeAt(index-1, list, col)
    beforeNode.next = next(beforeNode, col).next
}