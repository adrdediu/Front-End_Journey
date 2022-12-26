

var longestPalindrome = function (s) {
    if(s.length <= 1) return s;
    let stringLength = s.length;
    let subString = "";
    let subStringLength = 0;

    var Palindrome = function (l,r) {
        while(l>=0 && r < stringLength && s[l]==s[r]) {
            if(subStringLength < r - l + 1) {
                subString = s.substr(l,r-l+1);
                subStringLength = subString.length;
            }
            l--;
            r++;
        }
    }

    for(let i = 0; i < stringLength; i++) {
        Palindrome(i,i);
        Palindrome(i,i+1);
    }
    return subString;
}

console.log(longestPalindrome("baba"));