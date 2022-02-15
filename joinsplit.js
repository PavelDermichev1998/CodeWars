function correct(string) {
  let arr = string.split('');
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === '5') {
      arr[i] = 'S'
    }
    
    if (arr[i] === '0') {
      arr[i] = 'O'
    }
    if (arr[i] === '1') {
      arr[i] = 'I'
    }
  }
  let str = arr.join('')
  return str
}
