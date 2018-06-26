'use strict';

enqueue(val) = () => {
    let st1 = [1, 2, 3];
    let st2 = [];

    while (!st1 === null){
        st2.push(st1);
    }
    st1.push(val)
    st1.push(st2);
    return st1;
}

dequeue() = () => {
    let st1 = [1, 2, 3];
    let st2 = [];

    if (st1 === null){
        return err;
    }
    st1.pop()
    return st1;
}