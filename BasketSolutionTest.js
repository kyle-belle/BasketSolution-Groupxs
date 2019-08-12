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
                {item_name: "First book", amount: 1},
                {item_name: "Third book", amount: 3}
            ]
            //...
        }

        let basketCount = BasketSolution.basketCount(input);

        expect(basketCount).to.equal(expected);

        expected = 8;

        input = {
            basket_id: "2",
            items: [
                {item_name: "First book", amount: 2},
                {item_name: "Second book", amount: 3},
                {item_name: "Fourth book", amount: 3}
            ]
            //...
        }

        basketCount = BasketSolution.basketCount(input);

        expect(basketCount).to.equal(expected);
    });
});
