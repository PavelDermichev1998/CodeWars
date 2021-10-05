function countPositivesSumNegatives(input) {

if (input == null || input.length < 1){
  return [];
}

var newArray = [0, 0];


for (var i = 0; i < input.length; i++){

  if (input[i] > 0)
    {
    newArray[0] += 1;
    }

  else {
    newArray[1] += input[i];
  }

  }
return newArray;
}
