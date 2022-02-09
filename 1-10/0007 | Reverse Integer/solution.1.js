/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let s = x.toString(),
    negatif = false;

  if (s[0] === "-") {
    negatif = true;
    s = s.slice(1, s.length);
  }

  let ss = "";
  for (let i = s.length - 1; i >= 0; i--) {
    ss += s[i];
  }

  let sss;
  negatif ? (sss = +ss * -1) : (sss = +ss * 1);
  if (sss < (-2) ** 31 || sss > 2 ** 31 + 1) {
    return 0;
  }

  return sss;
};
