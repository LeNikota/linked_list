class Node {
  constructor(value, next) {
    this.value = value || null;
    this.next = next || null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    if (this.isEmpty()) {
      this.head = new Node(value);
      return;
    }

    let temp = this.head;
    while (temp.next != null) {
      temp = temp.next;
    }
    temp.next = new Node(value);
  }

  prepend(value) {
    this.head = this.isEmpty() ? new Node(value) : new Node(value, this.head);
  }

  size() {
    let counter = 0;
    let temp = this.head;

    while (temp != null) {
      temp = temp.next;
      counter++;
    }
    return counter;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    if (this.isEmpty()) return null;
    let temp = this.head;

    while (temp.next != null) temp = temp.next;
    return temp;
  }

  at(index) {
    let temp = this.head;

    for (let i = 0; i < index; i++) {
      if (temp == null) {
        return "There is no item at this index";
      }
      temp = temp.next;
    }
    return temp;
  }

  pop() {
    if(this.isEmpty()) return null;
    if(this.head.next == null) { // has only one node
      const poppedNode = this.head;
      this.head = null;
      return poppedNode;
    } 

    let current = this.head;
    let previous = null;
    let poppedNode;

    while (current.next != null) {
      previous = current;
      current = current.next;
    }

    poppedNode = current;
    previous.next = null;
    return poppedNode;
  }

  shift() {
    if(this.isEmpty()) return null;

    let shiftedNode = this.head;

    this.head = this.head.next;
    return shiftedNode;
  }

  contains(value) {
    let temp = this.head;

    while (temp != null) {
      if (value === temp.value) return true;
      temp = temp.next;
    }
    return false;
  }

  find(value) {
    let temp = this.head;
    let index = 0;

    while (temp != null) {
      if (temp.value === value) return index;
      temp = temp.next;
      index++;
    }

    return null;
  }

  toString() {
    let temp = this.head;
    let string = "";

    while (temp != null) {
      string += `(${temp.value}) -> `;
      temp = temp.next;
    }
    return (string += "null");
  }

  insertAt(value, index) {
    if (this.isEmpty()) {
      this.head = new Node(value, this.head);
      return;
    }
    if (index == null || index == 0) {
      this.head = new Node(value, this.head);
      return;
    }

    let current = this.head;
    let previous = null;

    for (let i = 0; i < index; i++) {
      if (current.next == null) {
        current.next = new Node(value);
        return;
      }
      previous = current;
      current = current.next;
    }
    previous.next = new Node(value, current);
  }

  removeAt(index) {
    if (this.isEmpty()) {
      return;
    }
    if (index == null || index == 0) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let previous = null;

    for (let i = 0; i < index; i++) {
      if (current.next == null) {
        previous.next = null;
        return;
      }
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
  }

  isEmpty() {
    return this.head == null;
  }
}

const list = new LinkedList();

list.append(3)
list.prepend(5)
list.prepend(33)
list.append('last')
list.prepend('first')
console.log(list.toString());

console.log("The list size is", list.size());
console.log(list.getHead());
console.log(list.getTail());
console.log(list.at(3));
console.log(list.pop());
console.log(list.getTail());
console.log(list.shift());
console.log(list.getHead());
console.log(list.contains());
console.log(list.find('last'));
console.log(list.at(3));
console.log(list.isEmpty(3));
list.insertAt('lol',1)
list.removeAt(1)
console.log("List is: " + list.toString());


//is there any bugs in the code
//can i optimize this