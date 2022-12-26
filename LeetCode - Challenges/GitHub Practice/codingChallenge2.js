function sockMerchant(n, ar) {
    // Write your code here
    if(n>= 1 && n <= 100) {
        let nr = 0;
        ar.sort();
        for(let i = 0; i < n ;i++)
        {
            if(ar[i]==ar[i+1]) {
                nr++;i++; 
            }
        }
        return nr;
    }
    else return 'Please provide a number between 1 and 100 for n';
}

let n = 9;
let ar = [10,20,20,10,10,30,50,10,20];
console.log(sockMerchant(n,ar));