function rentalCarCost(d) {
  let cost = d*40;
  if (d>=7) {
    cost = cost - 50
  }
  if (d>=3 && d<7){
    cost = cost - 20
  }
  return cost
}
