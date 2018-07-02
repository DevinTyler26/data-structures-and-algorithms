'use strict';

const preOrderTraversal = (rootNode, callback) => {
  if (!rootNode) return undefined;
  
  callback(rootNode);
  preOrderTraversal(rootNode.left, callback);
  preOrderTraversal(rootNode.right, callback);
  return undefined;
};

function fizzBuzzTree(tree) {
  preOrderTraversal(tree.root, (node) => {
    if (node.val % 3 === 0 && node.val % 5 === 0) {
      node.val = 'fizzBuzz';
    }
    if (node.val % 3 === 0) {
      console.log('3 FIZZ');
      node.val = 'fizz';
    }
    if (node.val % 5 === 0) {
      node.val = 'buzz';
    }
  });
  return tree;
}

let newTree = fizzBuzzTree(tree);
console.log(JSON.stringify(newTree, null, 2));
