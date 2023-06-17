# Linked list

## The code
```JS

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  prepend(value) {
    this.head = new Node(value, this.head);
    if (this.isEmpty()) {
      this.tail = this.head;
    }
    this.size++;
  }

  getSize() {
    return this.size;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  at(index) {
    if (index < 0 || index >= this.size) {
      throw new Error("Invalid index");
    }

    let temp = this.head;

    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }

    return temp;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }

    let poppedNode = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      while (current.next !== this.tail) {
        current = current.next;
      }
      current.next = null;
      this.tail = current;
    }

    this.size--;
    return poppedNode;
  }

  shift() {
    if (this.isEmpty()) {
      return null;
    }

    let shiftedNode = this.head;
    this.head = this.head.next;

    if (this.isEmpty()) {
      this.tail = null;
    }

    this.size--;
    return shiftedNode;
  }

  contains(value) {
    let temp = this.head;

    while (temp !== null) {
      if (temp.value === value) {
        return true;
      }
      temp = temp.next;
    }

    return false;
  }

  find(value) {
    let temp = this.head;
    let index = 0;

    while (temp !== null) {
      if (temp.value === value) {
        return index;
      }
      temp = temp.next;
      index++;
    }

    return null;
  }

  toString() {
    let temp = this.head;
    let string = "";

    while (temp !== null) {
      string += `(${temp.value}) -> `;
      temp = temp.next;
    }

    return string + "null";
  }

  insertAt(value, index = 0) {
    if (index < 0 || index > this.size) {
      throw new Error("Invalid index");
    }

    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index === this.size) {
      this.append(value);
      return;
    }

    const previousNode = this.at(index - 1);
    const newNode = new Node(value, previousNode.next);
    previousNode.next = newNode;
    this.size++;
  }

  removeAt(index = 0) {
    if (index < 0 || index >= this.size) {
      throw new Error("Invalid index");
    }

    if (index === 0) {
      this.shift();
      return;
    }

    const previousNode = this.at(index - 1);
    previousNode.next = previousNode.next.next;

    if (index === this.size - 1) {
      this.tail = previousNode;
    }

    this.size--;
  }

  isEmpty() {
    return this.head === null;
  }
}

```