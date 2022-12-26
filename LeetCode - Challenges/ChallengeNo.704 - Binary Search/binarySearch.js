var search = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(nums[mid]==target) {
            return mid;
        }
        else if(nums[mid] > target) {
            right = mid-1;
        } else {
            left = left+1;
        }
    }
    return -1;
};

//search([-1,0,3,5,9,12,15],9);
//search([2,5],);
console.log(search([-1,0],0));