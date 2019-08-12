var expect = require("chai").expect;

describe("BasketSolution", () => {
    it("Should exist", () => {
        let BasketSolution = require("./BasketSolution");
        expect(BasketSolution).to.not.be.undefined
    });
});

var BasketSolution = require("./BasketSolution");

describe("basketCount()", () => {
    it("Should take in a basket (object) and return the amount of items in it", () => {
        let expected  = 4;

        let input = {
            basket_id: "1",
            items: [
                {item_name: "First book", amount: 1, price: 8.00},
                {item_name: "Third book", amount: 3, price: 8.00}
            ]
            //...
        }

        let basketCount = BasketSolution.basketCount(input);

        expect(basketCount).to.equal(expected);

        expected = 8;

        input = {
            basket_id: "2",
            items: [
                {item_name: "First book", amount: 2, price: 8.00},
                {item_name: "Second book", amount: 3, price: 8.00},
                {item_name: "Fourth book", amount: 3, price: 8.00}
            ]
            //...
        }

        basketCount = BasketSolution.basketCount(input);

        expect(basketCount).to.equal(expected);
    });
});

describe("validateBasket()", () => {
    it("Should take in a basket object as input which must contain a valid id which cannot include spaces", () => {
        let expected = true;

        let input = {
            id: "123",
            items: []
        }

        let valid = BasketSolution.validateBasket(input);

        expect(valid).to.equal(expected);

        expected = false;

        input = {
            id: "1 23",
            items: []
        }

        valid = BasketSolution.validateBasket(input);

        expect(valid).to.equal(expected);
    });
});

describe("calcGrossTotal()", () => {
    it("should calculate the gross total for a given basket, that is the total before any discounts or fee are added/deducted.", () => {
        let expected = 24;

        let input = {
            id: "123",
            items: [
                {item_name: "First book", amount: 2, price: 8.00},
                {item_name: "Fifth book", amount: 1, price: 8.00}
            ]
        };

        let total = BasketSolution.calcGrossTotal(input);

        expect(total).to.equal(expected);

        expected = 16;

        input = {
            id: "123",
            items: [
                {item_name: "Second book", amount: 1, price: 8.00},
                {item_name: "Fifth book", amount: 1, price: 8.00}
            ]
        };

        total = BasketSolution.calcGrossTotal(input);

        expect(total).to.equal(expected);
    });
})

describe("calcDiscount()", async () => {
    await it("Should calculate the discount for a given basket.", async () => {
        let expected = 0;

        let input = {
            id: "321",
            items: [
                {item_name: "First book", amount:3, price: 8.00}
            ]
        }

        let discount = await BasketSolution.calcDiscount(input);

        expect(discount).to.equal(expected);

        expected = 16 * 0.05;

         input = {
            id: "321",
            items: [
                {item_name: "First book", amount: 1, price: 8.00},
                {item_name: "Second book", amount: 1, price: 8.00}
            ]
        }

        discount = await BasketSolution.calcDiscount(input);

        expect(discount).to.equal(expected);

        expected = 12.8;

         input = {
            id: "321",
            items: [
                // book name should be stored somewhere and retrieved from elsewhere just too lazy right now
                {item_name: "First book", amount: 2, price: 8.00},
                {item_name: "Second book", amount: 2, price: 8.00},
                {item_name: "Third book", amount: 2, price: 8.00},
                {item_name: "Fourth book", amount: 1, price: 8.00},
                {item_name: "Fifth book", amount: 1, price: 8.00}
            ]
        }

        discount = await BasketSolution.calcDiscount(input);

        expect(discount).to.equal(expected);
    });

    
});

