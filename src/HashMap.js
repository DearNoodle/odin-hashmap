import LinkedList from "./LinkedList";
import LinkedListNode from "./LinkedListNode";

class HashMap {
  constructor() {
    this.size = 47;
    this.map = new Array(this.size);
    for (let i = 0; i < this.size; i++) {
      this.map[i] = new LinkedList();
    }
    this.loadFactor = 0.75;
    this.entryNum = 0;
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    hashCode %= this.size;
    return hashCode;
  }

  set(key, value) {
    if (typeof key !== "string") {
      throw new Error("Key is not a string.");
    }
    let bucket = this.map[this.hash(key)];
    let setNode = new LinkedListNode([key, value]);
    if (!bucket.head) {
      bucket.head = setNode;
      this.entryNum += 1;
    } else {
      let cur = bucket.head;
      if (cur.value[0] === key) {
        cur.value[1] = value;
        return;
      }
      while (cur.next) {
        cur = cur.next;
        if (cur.value[0] === key) {
          cur.value[1] = value;
          return;
        }
      }
      cur.next = setNode;
      this.entryNum += 1;
    }
  }

  get(key) {
    if (typeof key !== "string") {
      throw new Error("Key is not a string.");
    }
    let bucket = this.map[this.hash(key)];
    if (!bucket.head) {
      return null;
    }
    let cur = bucket.head;
    if (cur.value[0] === key) {
      return cur.value[1];
    }
    while (cur.next) {
      cur = cur.next;
      if (cur.value[0] === key) {
        return cur.value[1];
      }
    }
    return null;
  }

  has(key) {
    if (typeof key !== "string") {
      throw new Error("Key is not a string.");
    }
    let bucket = this.map[this.hash(key)];
    if (!bucket.head) {
      return false;
    }
    let cur = bucket.head;
    if (cur.value[0] === key) {
      return true;
    }
    while (cur.next) {
      cur = cur.next;
      if (cur.value[0] === key) {
        return true;
      }
    }
    return false;
  }

  remove(key) {
    if (typeof key !== "string") {
      throw new Error("Key is not a string.");
    }
    let bucket = this.map[this.hash(key)];
    if (!bucket.head) {
      return false;
    }
    let cur = bucket.head;
    let pre = null;
    if (cur.value[0] === key) {
      bucket.head = cur.next;
      this.entryNum -= 1;
      return true;
    }
    while (cur.next) {
      pre = cur;
      cur = cur.next;
      if (cur.value[0] === key) {
        pre.next = cur.next;
        this.entryNum -= 1;
        return true;
      }
    }
    return false;
  }

  length() {
    return this.entryNum;
  }

  clear() {
    for (let i = 0; i < this.size; i++) {
      this.map[i] = new LinkedList();
    }
    this.entryNum = 0;
  }

  keys() {
    let arr = [];
    this.map.forEach((bucket) => {
      if (bucket.head) {
        let cur = bucket.head;
        arr.push(cur.value[0]);
        while (cur.next) {
          cur = cur.next;
          arr.push(cur.value[0]);
        }
      }
    });
    return arr;
  }

  values() {
    let arr = [];
    this.map.forEach((bucket) => {
      if (bucket.head) {
        let cur = bucket.head;
        arr.push(cur.value[1]);
        while (cur.next) {
          cur = cur.next;
          arr.push(cur.value[1]);
        }
      }
    });
    return arr;
  }

  entries() {
    let arr = [];
    this.map.forEach((bucket) => {
      if (bucket.head) {
        let cur = bucket.head;
        arr.push(cur.value);
        while (cur.next) {
          cur = cur.next;
          arr.push(cur.value);
        }
      }
    });
    return arr;
  }
}

export default HashMap;
