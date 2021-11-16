function findDifference(a, b) {
  let suma = a[0]*a[1]*a[2];
  let sumb = b[0]*b[1]*b[2];
  let result = 0;
  if (suma > sumb) {
    result = suma-sumb
  } else {
      result = sumb-suma
  }
 return result
}
