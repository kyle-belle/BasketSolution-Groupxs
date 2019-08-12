var basketSolution = {
    basketCount: (basket = null) => {
        if(basket){
            let count = 0;

            basket.items.forEach((item) => {
                count += item.amount
            });

            return count;
        }
    }
};

module.exports = basketSolution;