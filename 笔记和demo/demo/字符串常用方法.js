let s = 'cxy and jxn'

console.log(s.charAt(2))

console.log(s.indexOf('jxn', 3))

console.log(s.lastIndexOf('cxy', 4))

let s1 = ' go shopping'
console.log(s.concat(s1))

console.log(s.slice(0, 3))
console.log(s.slice())

console.log(s.split(' '))
console.log(s)

console.log(s.substr(0, 3))
console.log(s)

console.log(s.substring(0, 3))
console.log(s)

console.log(s.match(/cxy/))

let s2 = 'cxy and cxy and cxy'
console.log(s2.match(/cxy/g))

console.log(s2.replace(/cxy/g, 'jxn'))

console.log(s2.search(/cxy/g))