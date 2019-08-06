/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  let res = 0;
  let map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
  }

  let arr = ['CM', 'CD', 'XC', 'XL', 'IX', 'IV']

  arr.forEach((item) => {
    let i = s.indexOf(item)
    if (i != -1) {
      res += map[item]
      s = s.replace(item, '')
    }
  })

  for(let j = 0; j < s.length; j++) {
    res += map[s[j]]
  }
  return res
};

console.log(romanToInt('MCMXCIV'))