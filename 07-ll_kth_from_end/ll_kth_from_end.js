'use strict';

nThFromEnd(n) = ()=> {
    if (!head) {
        return null;
    
    }
    if (n === 0) {
        
    }

    let listOne = head;
    let listTwo = head;

    for (let x = 0; x < n - 1; x++) {
        if (listTwo === null) return null;
        listTwo = listTwo.next;
    }

    while (listTwo.next != null){
        listOne = listOne.next;
        listTwo = listTwo.next
    }
    return listOne;
}