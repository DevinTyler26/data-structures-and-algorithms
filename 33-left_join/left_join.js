map = {
  lol: wow,
  put: deleted,
  update: post,
}

mapTwo = {
  lol: wow,
  put: deleted,
  sky: plant,
}

const leftJoin = (map, mapTwo) => {
  let output = [];
  for (let key in map){
    let arr = [key, map[key], mapTwo[key || null]];
    output.push(arr);
  }
  console.log(output);
  return output;
}

leftJoin(map, mapTwo);