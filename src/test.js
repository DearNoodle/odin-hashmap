class testLinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let cur = this.head;
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = newNode;
    }
  }

  prepend(value) {
    const newNode = new LinkedListNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  size() {
    if (!this.head) {
      return 0;
    }
    let cur = this.head;
    let nodeNum = 1;
    while (cur.next) {
      nodeNum += 1;
      cur = cur.next;
    }
    return nodeNum;
  }

  getHead() {
    if (!this.head) {
      throw new Error("No head for empty list.");
    }
    return this.head;
  }

  getTail() {
    if (!this.head) {
      throw new Error("No tail for empty list.");
    }
    let cur = this.head;
    while (cur.next) {
      cur = cur.next;
    }
    return cur;
  }

  at(index) {
    if (!Number.isInteger(index)) {
      throw new Error("Invalid parameter type. Integer required.");
    }
    if (index < 0) {
      throw new Error("List index out of range");
    }
    if (!this.head) {
      throw new Error("Cannot access index of empty list");
    }
    let cur = this.head;
    for (let i = 0; i < index; i++) {
      if (!cur.next) {
        throw new Error("List index out of range");
      }
      cur = cur.next;
    }
    return cur;
  }

  pop() {
    if (!this.head) throw new Error("Cannot pop in empty list");
    let cur = this.head;
    while (cur.next.next) {
      cur = cur.next;
    }
    cur.next = null;
  }

  contains(value) {
    if (!this.head) throw new Error("Empty list");
    let cur = this.head;
    if (cur === value) return true;
    while (cur.next) {
      cur = cur.next;
      if (cur.value === value) return true;
    }
    return false;
  }

  find(value) {
    if (!this.head) throw new Error("Cannot find value in empty list");
    let nodeIndex = 0;
    let cur = this.head;
    if (cur.value === value) return nodeIndex;
    while (cur.next) {
      cur = cur.next;
      nodeIndex += 1;
      if (cur.value === value) return nodeIndex;
    }
    return null;
  }

  toString() {
    if (!this.head) throw new Error("Empty list");
    let linkedListString = "";
    let cur = this.head;
    linkedListString += `( ${cur.value} )`;
    while (cur.next) {
      cur = cur.next;
      linkedListString += ` -> ( ${cur.value} )`;
    }
    linkedListString += ` -> null`;
    return linkedListString;
  }

  insertAt(value, index) {
    const newNode = new LinkedListNode(value);
    if (!this.head && index !== 0) throw new Error("List index out of range");
    let cur = this.head;
    let pre = null;
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    for (let i = 0; i <= index; i++) {
      if (i === index) {
        newNode.next = cur;
        pre.next = newNode;
        return;
      }
      if (!cur.next && i + 1 !== index) {
        throw new Error("List index out of range");
      }
      pre = cur;
      cur = cur.next;
    }
  }

  removeAt(index) {
    if (!this.head) throw new Error("Cannot remove node from empty list");
    let cur = this.head;
    let pre = null;
    if (index === 0) {
      this.head = cur.next;
      return;
    }
    for (let i = 0; i < index; i++) {
      pre = cur;
      cur = cur.next;
      if (!cur) {
        throw new Error("List index out of range");
      }
    }
    pre.next = cur.next;
  }
}

// export default LinkedList;
