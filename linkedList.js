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
    if (this.head === null) {
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
    this.head =
      this.head == null ? new Node(value) : new Node(value, this.head);
  }

  size(){
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
    let temp = this.head;

    while(temp.next != null) temp = temp.next;
    return temp;
  }

  at(index){
    let temp = this.head;

    for (let i = 0; i < index; i++) {
      if(temp == null) {
        return 'There is no item at this index';
      }
      temp = temp.next
    }
    return temp;
  }

  pop(){
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

  shift(){
    let shiftedNode = this.head;

    this.head = this.head.next;
    return shiftedNode;
  }

  contains(value){
    let temp = this.head;
    
    while (temp != null) {
      if(value === temp.value) return true;
      temp = temp.next;
    }
    return false;
  }

  find(value){
    let temp = this.head;
    let index = 0;
    
    while (temp != null) {
      if(temp.value === value) return index;
      temp = temp.next;
      index++
    }
    
    return null;
  }

  toString(){
    let temp = this.head;
    let string = '';
    
    while (temp != null) {
      string += `(${temp.value}) -> `
      temp = temp.next;
    }
    return string += 'null';
  }

  insertAt(value, index){
    if(this.head == null) {
      this.head = new Node(value, this.head)
      return;
    }
    if(index == null || index == 0){
      this.head = new Node(value, this.head)
      return;
    }

    let current = this.head;
    let previous = null;

    for (let i = 0; i < index; i++) {
      if(current.next == null){
        current.next = new Node(value)
        return;
      }
      previous = current
      current = current.next
    }
    previous.next = new Node(value, current);
  }

  removeAt(index){
    if(this.head == null) {
      return;
    }
    if(index == null || index == 0){
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let previous = null;

    for (let i = 0; i < index; i++) {
      if(current.next == null){
        previous.next = null
        return;
      }
      previous = current
      current = current.next
    }
    previous.next = current.next;
  }
}

const list = new LinkedList();

console.log('The list size is', list.size());
console.log(list.getHead());
console.log(list.getTail());
console.log(list.at(3));
console.log(list.pop());
console.log(list.getTail());
console.log(list.shift());
console.log(list.getHead());
console.log(list.contains(33));
console.log(list.find('last'));
console.log(list.at(3));
list.insertAt(10,3)
list.removeAt(0)
console.log(list.toString());


//check for bugges