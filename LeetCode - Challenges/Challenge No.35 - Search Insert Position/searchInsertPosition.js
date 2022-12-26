var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid]==target) {
            return mid;
        }
        else if(nums[mid] >= target) {
            right = mid-1;
        } else {
            left = left+1;
        }
        if(left>right) return right+1;

        console.log(mid,left,right);
    }
    return -1;
};

console.log(searchInsert([1,3,5,7],2));