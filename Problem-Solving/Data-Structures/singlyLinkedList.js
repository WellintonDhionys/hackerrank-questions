function SinglyLinkedListNode(data) {
    return {
        data,
        next: null
    };
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    insertNode(llistItem) {
        const node = SinglyLinkedListNode(llistItem);

        if (this.head === null) {
            this.head = node;
        } else {
            let lastNode = this.head;

            while (lastNode.next !== null) {
            lastNode = lastNode.next;
            }

            lastNode.next = node;
        }

        return this;
    }
}

module.exports = SinglyLinkedList;