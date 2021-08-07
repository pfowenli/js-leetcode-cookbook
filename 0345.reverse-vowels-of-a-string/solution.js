/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    if (s === null || s.length === 0) {
        return s
    }
    
    let left = 0
    let right = s.length - 1
    
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    const chars = s.split('')
    
    while (left < right) {
        if (!vowels.includes(chars[left])) {
            left++
            continue
        }
        
        if(!vowels.includes(chars[right])) {
            right--
            continue
        }
        
        let temp = chars[left]
        chars[left]= chars[right]
        chars[right] = temp

        left++
        right--           
    }
    
    return chars.join('')
}
