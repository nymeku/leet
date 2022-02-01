/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(nums1, nums2) {
    let grand = nums1.concat(nums2)
    let sorted = grand.sort((a,b) => {return a-b})
    let median
    let moitie
    if (sorted.length%2 != 0) {
        moitie = Math.floor(sorted.length/2)
        console.log(moitie)
        console.log(sorted[moitie])
        return sorted[moitie].toFixed(5)
    }
    else {
        moitie = sorted.length/2
        median = (sorted[moitie] + sorted[moitie-1])/2
        return median.toFixed(5)
    }
};