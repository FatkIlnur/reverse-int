module.exports = function reverse (n) {
  let str = n.toString();
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result = `${str[i]}${result}`;
  }
  return parseInt(result);
}

