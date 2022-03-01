const sum = (...args) => {
  const a = [...args];
  return a.reduce((a, b) => a + b, 0);
  
}
