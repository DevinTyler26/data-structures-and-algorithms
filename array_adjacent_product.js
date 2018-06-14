let a = [
    [9, 2, 3],
    [3, 7, 6],
    [8, 4, 2],
    [5, 3, 9],
    [1, 5, 4],    
]

let findLargest = () => {
  let productArr = [];

  for (i = 0; i < a.length; i++){
      for (j = 0; j < a[i].length; j++){
          let currNum = a[i][j];
          if (i + 1 >= a.length){
          }else{
            productArr.push(currNum * a[i + 1][j]);
            if (j + 1 >= a[j].length){
          }else{
            productArr.push(currNum * a[i][j + 1]);
            productArr.push(currNum * a[i + 1][j + 1]);
          }
          if (i - 1 < 0){
              
          }else{
            productArr.push(currNum * a[i - 1][j]);
            if(j + 1 >= a[j].length){

            }else{
            productArr.push(currNum * a[i - 1][j + 1]);
            }
            if (j - 1 < 0){
          }else{
            productArr.push(currNum * a[i][j - 1]);
            if(i + 1 >= a.length){

            }else{
            productArr.push(currNum * a[i + 1][j - 1]);
            }
          }
        }
        }
      };
  };
  console.log(Math.max(...productArr));
};


findLargest();