'use strict';

module.exports = exports = {};

class Queue {
    constructor() {
        this.st1 = [];
        this.st2 = [];
    }
    enqueue(val) {

        while (!this.st1 === null){
            st2.push(this.st1);
        }
        this.st1.push(val)
        this.st1.push(this.st2);
        return this.st1;
    }

    dequeue() {

        if (this.st1 === null){
            return err;
        }
        this.st1.pop()
        return this.st1;
    }
}