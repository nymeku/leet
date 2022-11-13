/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
	function retro(string, counter) {
		if (counter === 1) {
			return string
		}
		let package = []
		let tmp = ""
		for (let i = 0; i < string.length; i++) {
			if (string[i] != string[i + 1]) {
				tmp += string[i]
				package.push(tmp)
				tmp = ""
			} else {
				tmp += string[i]
			}
		}
		counter--
		string = package.map((item) => item.length + item[0]).join("")
		return retro(string, counter)
	}
	return retro("1", n)
}
