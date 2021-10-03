function filter_list(arr) {
    let someUsers = arr.filter(item => typeof item === 'number');
    return someUsers;
  }
