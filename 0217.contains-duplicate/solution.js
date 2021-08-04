/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const numMap = new Map()

    for (const num of nums) {
        if (numMap.get(num)) {
            return true
        }

        numMap.set(num, true)
    }

    return false
}