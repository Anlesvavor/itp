var flatten = (arr) => {
  return arr.reduce((a, b) => a.concat(b));
}

var a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];


var myLoop = (value, test, update, body) => {
  while (test(value)) {
    body(value)
    value = update(value);
  }
}

myLoop(1, v => v < 10, u => u + 1, w => console.log("hola, numero", w));

var every = (array, test) => {
  for (v of array) {
    if (!test(v)) return false;
  }
  return true;
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true


var some = (array, test) => {
  for (v of array) {
    if (test(v)) return true;
  }
  return false;
}

console.log(some([1, 3, 5], n => n < 10));
// → true
console.log(some([2, 4, 16], n => n < 10));
// → true
console.log(some([], n => n < 10));
// → false


const SCRIPTS = require('./scripts.js');


function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({
        name,
        count: 1,
        
      });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
      return script;
    }
  }
  return null;
}

var dominantDirection = text => {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script : "none";
  }).filter(({
    name
  }) => name != "none");

  let total = scripts.reduce((n, {
    count
  }) => n + count, 0);
  if (total == 0) return "No scripts found";
  /*
    return scripts.map(({name, count}) => {
      return `${Math.round(count * 100 / total)}% ${name}`;
    }).join(", ");
  */
 /*
  return scripts.filter(({
    count
  }) => count == Math.max(...scripts.map(({
    count
  }) => count)));
  */

  return scripts.filter(({count})=> count == Math.max(...scripts.map(({count}) => count)))[0].name.direction;
}
var flatten = (arr) => {
  return arr.reduce((a, b) => a.concat(b));
}

var a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];


var myLoop = (value, test, update, body) => {
  while (test(value)) {
    body(value)
    value = update(value);
  }
}

myLoop(1, v => v < 10, u => u + 1, w => console.log("hola, numero", w));

var every = (array, test) => {
  for (v of array) {
    if (!test(v)) return false;
  }
  return true;
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true


var some = (array, test) => {
  for (v of array) {
    if (test(v)) return true;
  }
  return false;
}

console.log(some([1, 3, 5], n => n < 10));
// → true
console.log(some([2, 4, 16], n => n < 10));
// → true
console.log(some([], n => n < 10));
// → false


const SCRIPTS = require('./scripts.js');


function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({
        name,
        count: 1,
        
      });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
      return script;
    }
  }
  return null;
}

var dominantDirection = text => {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script : "none";
  }).filter(({
    name
  }) => name != "none");

  let total = scripts.reduce((n, {
    count
  }) => n + count, 0);
  if (total == 0) return "No scripts found";
  /*
    return scripts.map(({name, count}) => {
      return `${Math.round(count * 100 / total)}% ${name}`;
    }).join(", ");
  */
 /*
  return scripts.filter(({
    count
  }) => count == Math.max(...scripts.map(({
    count
  }) => count)));
  */

  return scripts.filter(({count})=> count == Math.max(...scripts.map(({count}) => count)))[0].name.direction;
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl