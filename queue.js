class Queue{
    constructor() {
        this.head = 0;
        this.rear = -1;
        this.items = {};
    }
    
    isEmpty() {
        if(this.head>this.rear||this.rear==-1) {
            console.log("Queue is Empty");
            return true;
        }
        return false;
    }
    
    push(value) {
        this.rear += 1;
        this.items[this.rear] = value;
    }
    
    pop() {
        if(this.isEmpty()) return
        delete this.items[this.head];
        this.head+=1;
    }
    
    front() {
        if(this.isEmpty()) return
        return this.items[this.head];
    }
    
    tail() {
        if(this.isEmpty()) return
        return this.items[this.rear];
    }
}

const myQueue = new Queue();
console.log(myQueue.front())
myQueue.push("One");
myQueue.pop();
myQueue.push("Two")
myQueue.pop();
myQueue.pop();
myQueue.push("Three")
myQueue.push("Four")
console.log(myQueue.front())
console.log(myQueue.tail())