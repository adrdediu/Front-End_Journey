
function lengthOfLongestSubstring(s)
{
    let seen = new Map();
    let maximum_length = 0;
 
    let start = 0;

    for(let end = 0; end < s.length; end++){
        if (seen.has(s[end])) {
            start = Math.max(start, seen.get(s[end]) + 1);
        }
        seen.set(s[end],end);
        maximum_length = Math.max(maximum_length, end - start + 1);
    }
    return maximum_length;
}

  console.log(lengthOfLongestSubstring("aabbaa"));
  