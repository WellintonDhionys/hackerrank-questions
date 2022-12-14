const SinglyLinkedList = require('./singlyLinkedList');

function deleteNode(llist, position) {
  if (position === 0) {
    return llist.next;
  }

  let current = llist;
  let previous;

  let i = 0;

  if (current) {
    while(current.next != null) {
      if (i < position) {
        previous = current;
        current = current.next;

        i++;
      } else {
        previous.next = current.next;

        return llist;
      }
    }
  }

  return llist;
}

let linkedList = new SinglyLinkedList();

const llistCount = Math.floor(Math.random() * 10);
console.log(llistCount);

for (let i = 0; i < llistCount; i++) {
  const llistItem = Math.floor(Math.random() * 10);
  linkedList.insertNode(llistItem);
}

let llist1 = deleteNode(linkedList.head, 1);
console.log(JSON.stringify(llist1, null, 2));