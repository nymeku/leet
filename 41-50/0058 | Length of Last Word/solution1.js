/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
	const g = s.split(" ").filter((a) => a.length > 0)
	return g[g.length - 1].length
}
