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
  return list.toString();
};
