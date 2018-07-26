let map = [[0,0,0,0,0,0,1,0],
           [0,0,1,1,0,0,1,0],
           [0,0,0,0,0,1,1,1],
           [1,1,1,0,0,0,0,0],
           [0,1,1,0,1,1,0,1],
           [0,0,0,0,1,0,0,1],
           [0,1,0,0,1,0,0,0]];

let number = 0;
const numberOfIslands = (map) => {
  for (row = 0; row < map.length; row++){
    for (col = 0; col < map[0].length; col++){
      if(map[row][col] === 1){
        number++;
        turnToZero(map, row, col);
      }
    }
  }
  return number;
}

const turnToZero = (map, row, col) => {
  if(row >= map.length || col >= map[0].length || row < 0 || col < 0 || map[row][col] == 0) return;
  
  map[row][col] = 0;
  turnToZero(map, row + 1, col);
  turnToZero(map, row, col + 1);
  turnToZero(map, row - 1, col);
  turnToZero(map, row, col - 1);
}

numberOfIslands(map);
console.log(map)
console.log(number)