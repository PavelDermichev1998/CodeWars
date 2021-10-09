function getSum( a,b ){
  let sum = 0;
  if (a == b) return a;
  if(a < b){
    for (; a <= b; a++){
      sum += a;
    }
   } else if (a > b){
       for(; b <= a; b++){
        sum += b;
       }
   }
  return sum;
}
