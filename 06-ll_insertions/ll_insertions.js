'use strict';

append(val) = () => {
  const node = new Node(val);

  if(!this.head){
      this.head = node;
  }
  let currNode = this.head;
  while (currNode.next) {
      currNode = currNode.next;
  }
  currNode.next = node;
  return this;
}

insertBefore(sel, val) = () => {
    const node = new Node(val);
    let prevNode = this.head;
    let selectNode = prevNode.next;

    if (this.head.value === sel) {
        node.next = this.head;
        this.head = node;
    }
    let currNode = this.head;
    while (currNode.next) {
        if (currNode.value === sel){
            prevNode.next = node;
            node.next = currNode.next;
        } else {
            prevNode = currNode;
            currNode = currNode.next;
        }
    }
}

insertAfter(sel, val) = () => {
    const node = new Node(val);
    let prevNode = this.head;
    let selectNode = prevNode.next;

    if (this.head.value === sel) {
        this.head.next = node;
    }
    let currNode = this.head;
    while (currNode.next) {
        if (currNode.value === sel){
            currNode.next = node;
        } else {
            currNode = currNode.next;
        }
    }
}