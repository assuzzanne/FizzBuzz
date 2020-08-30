/* Compute str list */

//Returns a list of strings with numbers from 1 to limit,
// where: all multiples of int1 are replaced by str1,
// all multiples of int2 are replaced by str2,
// all multiples of int1 and int2 are replaced by str1str2.

module.exports = function compute(int1, int2, limit, str1, str2) {
  // validation
  // gestion d'erreur

  let list = [];

  for (let i = 1; i < limit; i++) {
    if (i % int1 === 0 && i % int2 === 0) {
      list.push(str1.concat(str2));
    } else if (i % int1 === 0) {
      list.push(str1);
    } else if (i % int2 === 0) {
      list.push(str2);
    } else {
      list.push(i);
    }
  }
  console.log("list", list);
  return list.toString();
};
