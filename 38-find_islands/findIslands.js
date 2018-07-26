define a number and set it to 0
create nested for loops to go through 2d matrix one for rows and one for columns
if map and row and coloumn is equal to 1 increment number that was defined outside of for loops then call turnToZero with our map and row and column values

once the for loops are done, return the number

define a new recursive function turnToZero that will take in a map, row int and column int
define an if statement that will check for out of bounds ints
move on to setting map[][] to zero (recursize base case) so we wont get stuck in an recursive hell
call turnToZero for all the adjacent map values