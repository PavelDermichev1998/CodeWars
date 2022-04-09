function fakeBin(x){
  let el = '';
  for (let i = 0; i < x.length; i++) {
    if (x[i] < 5){
      el +=  0
    } else {
    el += 1
    }
  }
  return el
}
function fakeBin(x){
  let el = '';
  for (let i = 0; i < x.length; i++) {
    (x[i] < 5) ? el+=0 : el+=1
  }
  return el
}
