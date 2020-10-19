function getName(node){
    return node['name']
}

function headNode(linkedList, collection){
   return collection[linkedList]
}

function next(node, collection){
    let nextAddress = node.next
    return collection[`${nextAddress}`]
}

function nodeAt(index, linkedList, collection){
    let currentNode = headNode(linkedList, collection)
    for (let i = 0; i < index; i++){
        currentNode = next(currentNode, collection)
    }
    return currentNode
}

function addressAt(index, linkedList, collection){
    if (index === 0){
        return linkedList
    } else {
        let node = nodeAt(index - 1, linkedList, collection)
        return node.next
    }
}

function indexAt(node, collection, linkedList){
    let currentNode = headNode(linkedList, collection)
    let currentIndex = 0
    while(currentNode !== node){
        currentIndex += 1
        currentNode = next(currentNode, collection)
    }
    return currentIndex
}

function insertNodeAt(index, nodeAddress, linkedList, collection){
    let previousNode = nodeAt(index - 1, linkedList, collection)
    let previousAddress = addressAt(previousNode, linkedList, collection)

    previousNode.next = nodeAddress
    let newNode = collection[nodeAddress]
    newNode.next = previousAddress
}

function deleteNodeAt(index, linkedList, collection){
    let previousNode
    let currentNode = headNode(linkedList, collection)
    for(let i = 0; i < index; i++){
        previousNode = currentNode
        currentNode = next(currentNode, collection)
    }
    previousNode.next = currentNode.next
}