/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
    let low = 0
    let high = Math.floor(Math.sqrt(c))
    let sum = 0

    while (low <= high) {
        sum = low * low + high * high

        if (sum === c) {
            return true
        }

        if (sum > c) {
            high--
            continue
        }

        low++
    }

    return false
}