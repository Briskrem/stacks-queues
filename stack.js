/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let nuNode = new Node(val)
    if(!this.head){
      this.head = nuNode
      this.tail = nuNode
    }else{
      //the tail is not changing in stack only in queue
      nuNode.next = this.head
      this.head = nuNode
      
    }
    this.size ++
    return 'added'
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (!this.first) throw new Error("Can't pop from an empty stack.");

    let temp = this.first;

    if (this.first == this.last) {
      this.last = null;
    }
    
    let tmp = this.head.val
    this.head = this.head.next
    this.size --
    return tmp

  }

  /** peek(): return the value of the first node in the stack. */

  peek() {

  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {

  }
}
let stk = new Stack()
stk.push('crixx1')
stk.push('crixx2')
console.log(stk)
console.log(stk.pop(), '%%%%%%%%%%%%%')
console.log(stk)
console.log(stk.pop(), '%%%%%%%%%%%%%')

console.log(stk)

module.exports = Stack;
