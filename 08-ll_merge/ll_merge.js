mergeList(one, two) = () => {
    let oneCurr = one.head;
    let twoCurr = two.head;
    let one_next;
    let two_next;

    while (oneCurr != null && twoCurr != null) {
        let one_next = oneCurr.next;
        let two_next = twoCurr.next;

        twoCurr.next = one_next;
        oneCurr.next = twoCurr;

        oneCurr = one_next;
        twoCurr = two_next; 
    }
    oneCurr = one.head;
}