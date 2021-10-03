function squareDigits(num){
    let digits = num.toString().split('');
    let realDigits = digits.map(Number);
    let index;
    let sum = '';
   
    for (let i = 0; i < realDigits.length; i++) {
    index = realDigits[i] * realDigits[i];
    sum +=String(index);     
   }
   
        let number = Number(sum);
        return number;
  }
