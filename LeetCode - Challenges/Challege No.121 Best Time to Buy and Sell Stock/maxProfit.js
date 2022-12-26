var maxProfit = function(prices) {
    let buyPrice = prices[0];
    let sellPrice = prices[prices.length-1];
    let days = prices.length-1;
    let profit = 0;
    for (let i = 1; i < days; i++) {
        if(buyPrice > prices[i]) {
          buyPrice = prices[i];  
        }
        for(j = i+1;j <= days; j++) {
            if(sellPrice < prices[j]) {
                sellPrice = prices[j];
            }
            if((sellPrice - buyPrice) > profit) {
                profit = sellPrice-buyPrice;
            }  
        }
    }
    return profit;
};

let prices = [7,6,4,3,1];

console.log(maxProfit(prices));