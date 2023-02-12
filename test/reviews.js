var ReviewClass = artifacts.require("./ReviewClass.sol");

contract("ReviewClass", function(accounts) {
  var reviewClassInstance;

  it("initializes with three reviews", function() {
    return ReviewClass.deployed().then(function(instance) {
      return instance.reviewCount();
    }).then(function(count) {
      assert.equal(count, 3);
    });
  });

  it("it initializes the reviews with the correct values", function() {
    return ReviewClass.deployed().then(function(instance) {
      reviewClassInstance = instance;
      return reviewClassInstance.reviews(1);
    }).then(function(review) {
      assert.equal(review[0], 1, "contains the correct productID");
      assert.equal(review[1], 848, "contains the correct orderNumber");
      assert.equal(review[2], "Headphone", "contains the correct productName");
      assert.equal(review[3], "Great product", "contains the correct reviewMessage");
      assert.equal(review[4], 5, "contains the correct numStars");
      return reviewClassInstance.reviews(2);
    }).then(function(review) {
      assert.equal(review[0], 2, "contains the correct productID");
      assert.equal(review[1], 849, "contains the correct orderNumber");
      assert.equal(review[2], "Watch", "contains the correct productName");
      assert.equal(review[3], "Bad product", "contains the correct reviewMessage");
      assert.equal(review[4], 1, "contains the correct numStars");
      return reviewClassInstance.reviews(3);
    }).then(function(review) {
      assert.equal(review[0], 1, "contains the correct productID");
      assert.equal(review[1], 848, "contains the correct orderNumber");
      assert.equal(review[2], "Headphone", "contains the correct productName");
      assert.equal(review[3], "Mid product", "contains the correct reviewMessage");
      assert.equal(review[4], 3, "contains the correct numStars");
    });
  });

  it("it initializes the hashmap of reviewed hm_orderNumber_bool with the correct values", function() {
    return ReviewClass.deployed().then(function(instance) {
      reviewClassInstance = instance;
      return reviewClassInstance.hm_orderNumber_bool(848);
    }).then(function(review) {
      assert.equal(review[0], true, "contains the correct bool");
      return reviewClassInstance.hm_orderNumber_bool(849);
    }).then(function(review) {
      assert.equal(review[0], true, "contains the correct bool");
    });
  });

});