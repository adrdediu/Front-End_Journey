var guessNumber = function(n) {
    let left = 1;
    let right = n;
    while(left <= right) {
        let pick = Math.floor((left+right)/2);
        switch(guess(pick)) {       
            case -1 : right = pick - 1; break;
            case  0 : return pick ;
            case  1 : left = pick + 1; break;
        }
    }
};