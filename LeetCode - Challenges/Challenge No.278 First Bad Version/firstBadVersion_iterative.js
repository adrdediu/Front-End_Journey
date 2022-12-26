
var solution = function(isBadVersion) {


    return function(n) {
        let left = 1, right = n;
        while(left < right) {
            let mid = Math.floor((right+left) /2);
            if(isBadVersion(mid)) {
                right = mid;
            } else {
                left = mid+1;
            }
        }
        return right
    };
};
