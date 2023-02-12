pragma solidity ^0.4.25;

contract ReviewClass {
    // Model a ReviewObject object 
    struct ReviewObject {
        uint productID;
        uint orderNumber;
        string productName;
        string reviewMessage;
        uint numStars;
    }

    // Get and set reviews
    mapping(uint => ReviewObject) public reviews;

    // Counter for the number of reviews
    uint public reviewCount;

    constructor () public {
        addReview(1, 848, "Headphone", "Great product", 5);
        addReview(2, 920, "Watch", "Bad product", 1);
    }

    function addReview (uint _product_id, uint _order_number, string _product_name, string _review_message, uint _num_stars) private {
        reviewCount ++;
        reviews[reviewCount] = ReviewObject(_product_id, _order_number, _product_name, _review_message, _num_stars);
    }
}
