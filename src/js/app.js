App = {
  web3Provider: null,
  contracts: {},
  account: '0x0',

  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
    if (typeof web3 !== 'undefined') {
      // If a web3 instance is already provided by Meta Mask.
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      // Specify default instance if no web3 instance provided
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      web3 = new Web3(App.web3Provider);
    }
    return App.initContract();
  },

  initContract: function() {
    $.getJSON("ReviewClass.json", function(reviewclass) {
      // Instantiate a new truffle contract from the artifact
      App.contracts.ReviewClass = TruffleContract(reviewclass);
      // Connect provider to interact with contract
      App.contracts.ReviewClass.setProvider(App.web3Provider);

      return App.render();
    });
  },

  render: function() {
    var reviewInstance;
    var loader = $("#loader");
    var content = $("#content");

    loader.show();
    content.hide();

    // Load account data
    web3.eth.getCoinbase(function(err, account) {
      if (err === null) {
        App.account = account;
        $("#accountAddress").html("Your Account: " + account);
      }
    });

    // Load contract data
    App.contracts.ReviewClass.deployed().then(function(instance) {
      reviewInstance = instance;
      return reviewInstance.reviewCount();
    }).then(function(reviewCount) {
      var reviewListDisplay = $("#reviewListDisplay");
      reviewListDisplay.empty();

      for (var i = 1; i <= reviewCount; i++) {
        reviewInstance.reviews(i).then(function(review) {
          var productID = review[0];
          var productName = review[1];
          var reviewMessage = review[2];
          var numStars = review[3];

          // Render candidate Result
          var reviewDisplayTemplate = "<tr><th>" + productID + "</th><td>" + productName + "</td><td>" + reviewMessage + "</td><td>" + numStars +"</td></tr>"
          reviewListDisplay.append(reviewDisplayTemplate);
        });
      }

      loader.hide();
      content.show();
    }).catch(function(error) {
      console.warn(error);
    });
  }
};

$(function() {
  $(window).load(function() {
    App.init();
  });
});