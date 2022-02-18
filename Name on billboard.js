function billboard(name, price = 30){
  let count = 0;
  for (let i =0; i<name.length;i++){
    count+=price
  }
  return count
} 
