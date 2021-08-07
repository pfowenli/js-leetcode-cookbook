/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    if (s === null || s.length === 0) {
        return s
    }

    let left = 0
    let right = s.length - 1

    const vowels = "aeiouAEIOU"
    const chars = s.split('')
    let temp

    while (left < right) {
        while (left < right && vowels.indexOf(chars[left]) === -1) {
            left++
        }

        while (left < right && vowels.indexOf(chars[right]) === -1) {
            right--
        }

        temp = chars[left]
        chars[left] = chars[right]
        chars[right] = temp

        left++
        right--
    }

    return chars.join('')
}