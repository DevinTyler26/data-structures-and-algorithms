'use strict';
class Queue {
  constructor() {
    this.stor = [];
  }

  enqueue(node) {
    return this.stor.push(node);
  }

  dequeue() {
    return this.stor.shift();
  }
}

let q = new Queue();

class Node { //eslint-disable-line
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
}

const nodes = [];

for (let i = 1; i <= 9; i++) {
  nodes.push(new Node(i));
}

const [one, two, three, four, five, six, seven, eight, nine] = nodes;

one.left = two;
one.right = three;

two.left = six;

three.left = four;
three.right = five;

six.right = seven;

seven.left = eight;
seven.right = nine;

const tree = new BinaryTree(one);
// console.log(JSON.stringify(tree, null, 2));

function breadthFirst(rootNode) {
  q.enqueue(rootNode);
  recurse(rootNode);

  function recurse(node) {
    if (q.stor.length === 0) return null;
    let popped = q.dequeue();
    console.log(popped.val);
    if (popped.left) q.enqueue(popped.left);
    if (popped.right) q.enqueue(popped.right);
    recurse(q.stor[0]);
  }
}

breadthFirst(tree.root);