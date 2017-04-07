function recursiveMe(num) {
  if(num === 0) {
    return 1;
  }

  if(typeof num !== 'number') {
    return false;
  }

  return num * recursiveMe(num - 1);
}



module.exports = recursiveMe;