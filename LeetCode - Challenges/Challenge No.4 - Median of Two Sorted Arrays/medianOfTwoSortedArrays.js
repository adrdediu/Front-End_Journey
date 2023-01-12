var findMedianSortedArrays = function(nums1, nums2) {
    
    let arrayMap = new Map();
    let maxLength = nums1.length + nums2.length;
    let i= 0,j=0;
    for(let end = 0; end < maxLength/2+1; end++) {
        if(!isNaN(nums1[i])&&!isNaN(nums2[j])) {
            if(nums1[i]<nums2[j]) {
                arrayMap.set(end,nums1[i]);
                i++;
            } 
            else if (nums2[j]<nums1[i]) {
                arrayMap.set(end,nums2[j]);
                j++;
            }
            else {
                arrayMap.set(end,nums1[i]);
                i++;
            }
        } else if(!isNaN(nums1[i])){
            arrayMap.set(end,nums1[i]);
            i++;
        } else if(!isNaN(nums2[j])) {
            arrayMap.set(end,nums2[j],);
            j++;
        } else {
            break;
        }
    }
    if(maxLength%2){
        return arrayMap.get((maxLength-1)/2);
    } else {
        return (arrayMap.get(maxLength/2-1) + arrayMap.get(maxLength/2))/2
    } 
};