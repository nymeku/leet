/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
	const maxx = 46_340
	for (let i = 0; i <= maxx; i++) {
		if (i * i > x) {
			if (i - 1 < 0) {
				return 0
			}
			return i - 1
		}
	}
	return maxx
}
