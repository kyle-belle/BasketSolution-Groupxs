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
    },

    calcGrossTotal: (basket = null) => {
        if(basket){
            let total = 0;
            basket.items.forEach((item) => {
                total += item.price * item.amount;
            });

            return total;
        }else{
            return null;
        }

    },

    calcDiscount: async (basket = null) => {
        if(basket){
            let discountTotal = 0;

            /* This approach does not work for reason i do not yet know */
            // await discount_offers.forEach(async (discount) => {
            //     let discountAmount = await discount.fn(basket);

            //     console.log("discount amount", discountAmount);

            //     if(discountAmount > 0){
            //         discountTotal += discountAmount;
            //         console.log("discountTotal in fn scope", discountTotal);
            //         console.log(`${discount.discount} Discount : $${discountAmount}`);
            //     }
            // });

            for(let i = 0; i <= discount_offers.length - 1; i++){
                let discountAmount = await discount_offers[i].fn(basket);

                if(discountAmount > 0){
                    discountTotal += discountAmount;
                    //console.log per purposely left here
                    console.log(`${discount_offers[i].discount} Discount : $${discountAmount}`);
                }
            }

            return discountTotal;
        }else{
            return null;
        }
    }
};

async function calcGrossTotalForDiscount(items){
    if(items){
        let total = 0;
        await items.forEach((item) => {
            total += item.price * item.amount;
        });

        return total;
    }else{
        return null;
    }
};

// I suggest we have an array of discount funtions which we run the baskets through
var discount_offers = [
    {discount: "Potter_mania", fn: async (basket /*should always be passed*/) => {

        let distinct_books = [];

        // because only one instance of an object is store for a particular item_name there should not be duplicates

        distinct_books = await basket.items.filter((item) => {
            //preferrable this would be ddone by id or something more uniquely identifiable 
            switch(item.item_name){
                case "First book":
                    return true;

                case "Second book":
                    return true;

                case "Third book":
                    return true;

                case "Fourth book":
                    return true;

                case "Fifth book":
                    return true;

                default:
                    return false;
            }
        });

        //In the current state length will not be more than five
        let discount_value;
        switch(distinct_books.length){
            case 0:
                discount_value = 0;
            break;

            case 1:
                discount_value = 0;
            break;

            case 2:
                //console.log per purposely left here
                console.log("Potter_mania discount 2");
                discount_value = 0.05 * await calcGrossTotalForDiscount(distinct_books);
                //return discount_value;
            break;

            case 3:
                //console.log per purposely left here
                console.log("Potter_mania discount 3");  
                discount_value = 0.1 * await calcGrossTotalForDiscount(distinct_books);
                //return discount_value;
            break;

            case 4:
                //console.log per purposely left here
                console.log("Potter_mania discount 4");                
                discount_value = 0.2 * await calcGrossTotalForDiscount(distinct_books);
                //return discount_value;
            break;

            case 5:
                //console.log per purposely left here
                console.log("Potter_mania discount 5");   
                discount_value = 0.25 * await calcGrossTotalForDiscount(distinct_books);
                //return discount_value;
            break;
        }

        return discount_value;
    }}
]

module.exports = basketSolution;