# Linked list
## The code
### The node class
```JS

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

```

### The linked list class
```JS

class LinkedList {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }

  /* Methods */
}

```

### The linked list class methods description

`append(value)` - appends value to the end of the list
```JS

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

```

`prepend(value)` - prepends value to the start of the list
```JS

  prepend(value) {
    this.head = new Node(value, this.head);
    if (this.isEmpty()) {
      this.tail = this.head;
    }
    this.size++;
  }
  
```
`getSize()` - returns size of the list
```JS
  getSize() {
    return this.size;
  }
```
`getHead()` - returns head of the list or null
```JS
  getHead() {
    return this.head;
  }
```
```JS
  getTail() {
    return this.tail;
  }
```
```JS
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
```
```JS
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
```
```JS
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
```
```JS
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
```
```JS
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
```

```JS
toString() {
    let temp = this.head;
    let string = "";

    while (temp !== null) {
      string += `(${temp.value}) -> `;
      temp = temp.next;
    }

    return string + "null";
  }
```
```JS
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
```
```JS
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
```
```JS
isEmpty() {
    return this.head === null;
  }
```

## For testing

```JS

//add how i use the code, test it from third point

```

- `name(n)` - description

//look at the code understand it
//look at others code, try to understand it
//use what i made, check for bugs