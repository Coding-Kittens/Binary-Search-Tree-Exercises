class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }
    let prevNode;
    let currentNode = this.root;
    while (currentNode) {
      prevNode = currentNode;
      currentNode =
        currentNode.val < val ? currentNode.right : currentNode.left;
    }

    if (prevNode.val < val) {
      prevNode.right = new Node(val);
    } else {
      prevNode.left = new Node(val);
    }
    return this;
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }
    let nextNode = node.val < val ? node.right : node.left;
    if (!nextNode) {
      if (node.val < val) {
        node.right = new Node(val);
      } else {
        node.left = new Node(val);
      }
      return this;
    }
    return this.insertRecursively(val, nextNode);
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.val === val) return currentNode;
      currentNode =
        currentNode.val < val ? currentNode.right : currentNode.left;
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    if (!node) return;
    if (node.val === val) return node;
    node = node.val < val ? node.right : node.left;
    return this.findRecursively(val, node);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root, arry = []) {
    arry.push(node.val);
    if (node.left) this.dfsPreOrder(node.left, arry);
    if (node.right) this.dfsPreOrder(node.right, arry);
    return arry;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node = this.root, arry = []) {
    if (node.left) this.dfsInOrder(node.left, arry);
    arry.push(node.val);
    if (node.right) this.dfsInOrder(node.right, arry);
    return arry;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root, arry = []) {
    if (node.left) this.dfsPostOrder(node.left, arry);
    if (node.right) this.dfsPostOrder(node.right, arry);
    arry.push(node.val);
    return arry;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let toVisit = [this.root];
    let visited = [];
    while (toVisit.length) {
      let currentNode = toVisit.shift();
      visited.push(currentNode.val);
      if (currentNode.left) toVisit.push(currentNode.left);
      if (currentNode.right) toVisit.push(currentNode.right);
    }
    return visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
