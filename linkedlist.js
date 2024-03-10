class Node{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(head = null) {
        this.head = head
        this.tail = this.head;
    }
    
    insert(data) {
        const node = new Node(data);
        if(!this.head&&!this.tail)
        this.head = this.tail = node;
        else  {
            this.tail.next = node;
            this.tail = node;
        }
    }
  
    deleteByValue(value) {
        let current = this.head;
        let prev = current;
        while(current!==null) {
            if(current.data !== value) {
                prev = current;
                current == current.next;
                console.log(current.data)
            } else {
            prev.next = prev.next.next;
            break
            }
        }
    }
  
    display() {
        let current = this.head
        while(current!==null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();

ll.insert(2)
ll.insert(3)
ll.insert(4)
ll.insert(5)
ll.deleteByValue(3)
ll.display()
