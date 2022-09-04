/** Node: node for a queue. */
console.log('mak man')


class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
console.log('wats happening')
/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    console.log('maxima')
    let nuNode = new Node(val)
    if(!this.first){
      this.first = nuNode
      this.last= nuNode
    }else{
      this.last.next = nuNode
      this.last = nuNode
    }
    this.size ++
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    let val = this.first.val
    if(this.first == this.last){
      this.last = null
    }
    this.first = this.first.next
    this.size --
    return val
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if(this.head == null){
      return null
    }else{
      return this.head.val
    }
    
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if(this.size == 0){
      return 'IS MTY'
    }else{
      return `It has ${this.size} items`
    }
  }
}

let x = new Node('val')
// console.log(x)

let qu = new Queue()
qu.enqueue(x)

console.log(qu)

module.exports = Queue;
