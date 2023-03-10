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

    // Event triggered on form submission
    event submittedEvent (
        uint _product_id, 
        uint _order_number, 
        string _product_name, 
        string _review_message, 
        uint _num_stars
    );

    // Get and set reviews
    mapping(uint => ReviewObject) public reviews;

    // Get the list of order numbers
    mapping(uint => bool) public hm_orderNumber_bool;

    // Counter for the number of reviews
    uint public reviewCount;

    constructor () public {
        addReview(1, 848, "Headphone", "Great product", 5);
        addReview(2, 849, "Watch", "Bad product", 1);
        addReview(1, 850, "Headphone", "Mid product", 3);
    }

    function addReview (uint _product_id, uint _order_number, string _product_name, string _review_message, uint _num_stars) public {
        require(!hm_orderNumber_bool[_order_number]); // verify uniqueness of orderNumber
        require(_num_stars >= 1 && _num_stars <= 5); // verify if the rating range is valid
        reviewCount ++;
        reviews[reviewCount] = ReviewObject(_product_id, _order_number, _product_name, _review_message, _num_stars);
        hm_orderNumber_bool[_order_number] = true;
        emit submittedEvent(_product_id, _order_number, _product_name, _review_message, _num_stars);
    }
}
