function countingValleys(steps, path) {
    // Write your code here
    let nrOfValleys=0;
    let seaLevel = 0;
    path = Array.from(path);
    for(let i = 0; i < steps; i++) {
        if(seaLevel >= 0) {
            if(path[i]=='U') seaLevel++;
            else if(path[i]=='D') seaLevel--;
                 else return 'Error! Unknown character.';
        }
        else {
            nrOfValleys++;
            while(seaLevel < 0 && i<steps)
            {
                if(path[i]=='U') seaLevel++;
                else if(path[i]=='D') seaLevel--;
                i++;
            }
            i--;
        }
    }
    return nrOfValleys;
}

console.log(countingValleys(8,"UDDDUDUU"));