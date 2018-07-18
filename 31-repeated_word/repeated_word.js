'use strict'

let string = 'Hi this string  will have a repeating word at some point in the string.'

const repeatedWord = (str) => {
  let map = {};
  let output = null;
  let split = str.replace(/\./g,' ').split(' ')

  let i = 0;
  while(output === null){
    typeof map[split[i]] === 'undefined' ? map[split[i]] = 1 : map[split[i]]++;
    console.log(map)
    map[split[i]] === 2? output = split[i] : i++;
  }
  console.log(output)
}
repeatedWord(string);