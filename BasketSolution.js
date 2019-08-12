var basketSolution = {
    basketCount: (basket = null) => {
        if(basket){
            let count = 0;

            basket.items.forEach((item) => {
                count += item.amount;
            });

            return count;
        }else{
            return null;
        }
    },
    validateBasket: (basket = null) => {
        if(basket){
            if(basket.id.indexOf(" ") === -1){
                return true;
            }else{
                return false;
            }
        }else{
            return null;
        }
    }
};

module.exports = basketSolution;