let map = [[0,0,0,0,0,0,1,0],
           [0,0,1,1,0,0,1,0],
           [0,0,0,0,0,1,1,1],
           [1,1,1,0,0,0,0,0],
           [0,1,1,0,1,1,0,1],
           [0,0,0,0,1,0,0,1],
           [0,1,0,0,1,0,0,0]];

//setting number of islands to 0 to initiate count
let number = 0;
//create a nested for loop to loop through rows and columns of map
const numberOfIslands = (map) => {
  for (row = 0; row < map.length; row++){ //outer loops needs to know the height of the map
    for (col = 0; col < map[0].length; col++){ //inner for loop needs to know the width of the map
      if(map[row][col] === 1){
        //if we come across a 1 in the map, we need to increment our island count
        number++;
        //then turn all of its adjacent values to zero so we dont count them as a separate island later on in our code
        turnToZero(map, row, col);
      }
    }
  }
  return number;
}

//This method is recursive and changes all adjacent values to the give map location to zero. It will get called when we run into a 1 in the map with our above  find island function
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
