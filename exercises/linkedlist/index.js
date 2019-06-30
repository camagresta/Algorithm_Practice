// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {}

class LinkedList {
  constructor() {}
  insertFirst(data) {}

  size() {}

  getFirst() {}

  getLast() {}
  clear() {}
  removeFirst() {}

  removeLast() {}

  insertLast(data) {}

  getAt(idx) {}

  removeAt(idx) {}

  insertAt(data, index) {}
  forEach(fn) {}

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
