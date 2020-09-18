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