let str = "The length property returns the length of a string";
let arr = [1, 2, 2, 3, 3, 5, 5, 2, 3, 2, 1, 4, 2];

Object.prototype.count = function (char, start = 0, end = this.length) {
  let count = 0;
  if (this instanceof Array) {
    for (let i = start; i < end; i++) {
      if (this[i] == char) {
        count++;
      }
    }
  } else {
    let find = "";
    for (let i = start; i < end; i++) {
      if (this[i] == char[0]) {
        for (let j = i, c = 0; c < char.length; c++, j++) {
          if (this[j] == char[c]) find += this[j];
          else break;
        }
        if (find == char) count++;
        find = "";
      }
    }
  }
  return count;
};
console.log(str.count("length")); // 2
console.log(str.count("e", 5, 28)); // 3
console.log(str.count(" ")); // 8
console.log(arr.count(5)); // 2
console.log(arr.count(2, 6, 16)); // 3
