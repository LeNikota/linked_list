# Linked list

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
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /* Methods */
}

```

### The linked list class methods description

`append(value)` - appends a value to the end of the list end of the list

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

`prepend(value)` - prepends a value to the start of the list

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

`getHead()` - returns head of the list or null if empty

```JS
  getHead() {
    return this.head;
  }
```

`getTail()` - returns tail of the list or null if empty

```JS
  getTail() {
    return this.tail;
  }
```

`at(index)`:

- Returns the node at the specified index
- The first node if the index not specified
- Throw an exception if the index negative or bigger or equal to the size of the list

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

`pop()`:

- Removes and returns the last node in the list
- Return null if empty

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

`shift()`:

- Removes and returns the first node in the list
- Return null if empty

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

`contains(value)` - Returns true if a value in the list, and false otherwise

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

`find(value)` - If a node with the value exist returns the node index, and null otherwise

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

`toString()` - Returns stringified version of the list

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

`insertAt(value, index)`:

- Inserts a value at the index
- If the index not specified prepends the value;
- Throw an exception if the index negative or bigger then the size of the list

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

`removeAt(index)`:

- Removes the value at the index
- If the index not specified removes the first value;
- Throw an exception if the index negative or bigger or equal to the size of the list

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

`isEmpty()` - Checks if the list is empty

```JS
isEmpty() {
    return this.head === null;
  }
```

### Try yourself

```JS

const list = new LinkedList();

// append(value)
list.append(3);
list.append(7);
list.append(11);
console.log(list.toString()); // Output: (3) -> (7) -> (11) -> null

// prepend(value)
list.prepend(1);
list.prepend(2);
console.log(list.toString()); // Output: (2) -> (1) -> (3) -> (7) -> (11) -> null

// getSize()
console.log(list.getSize()); // Output: 5

// getHead()
console.log(list.getHead()); // Output: Node { value: 2, next: Node { value: 1, next: [Node] } }

// getTail()
console.log(list.getTail()); // Output: Node { value: 11, next: null }

// at(index)
console.log(list.at(2)); // Output: Node { value: 3, next: Node { value: 7, next: [Node] } }

// pop()
console.log(list.pop()); // Output: Node { value: 11, next: null }
console.log(list.toString()); // Output: (2) -> (1) -> (3) -> (7) -> null

// shift()
console.log(list.shift()); // Output: Node { value: 2, next: [Node] }
console.log(list.toString()); // Output: (1) -> (3) -> (7) -> null

// contains(value)
console.log(list.contains(3)); // Output: true
console.log(list.contains(5)); // Output: false

// find(value)
console.log(list.find(7)); // Output: 2
console.log(list.find(5)); // Output: null

// insertAt(value, index)
list.insertAt(5, 1);
console.log(list.toString()); // Output: (1) -> (5) -> (3) -> (7) -> null

// removeAt(index)
list.removeAt(2);
console.log(list.toString()); // Output: (1) -> (5) -> (7) -> null

// isEmpty()
console.log(list.isEmpty()); // Output: false

```