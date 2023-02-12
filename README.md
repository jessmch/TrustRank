
# TrustRank - Authentic Reviews
TrustRank allows users enter the product information they have bought from a store, and they will be approved to upload their review to the website as long as they can provide a proof of purchase, which will be automatically verified using our smart contract.

# What Does TrustRank Do?
On many e-commerce websites, the amount of fake reviews for products can mislead customers into making poor purchasing decisions. TrustRank solves this problem by only allowing users with a unique verified order number to leave a review for a product. This provides customers with a more accurate representation of the products’ quality. Each user’s profile is linked to their Ethereum address. Along with the anonymity that TrustRank gives to its users, it allows customers to make informed buying decisions.

# Features

1. Connect Wallet:
Users are able to easily create their profile on TrustRank by connecting their wallet.

2. Upload Order Number
The order number from the order will be entered in a text box. TrustRank will verify if this order # is a valid order number for the product and is unique (to prevent multiple reviews).

3. Leave a Review
After the order number is verified, the user is now able to leave a review for that certain product. 
They can rate the product from 1-5 (reflected by a star rating) along with a written review of the product. All reviews will be anonymous and contain no user information. Users will also be able to upload a picture of the product that they are reviewing.

**Full Demo Video:**
https://youtu.be/Exi922e-ZK4

**Prototype:**
https://www.figma.com/proto/wmVgiHdlOGz5EpFy4XHb0N/TrustRank?node-id=1%3A2&scaling=contain&page-id=0%3A1&starting-point-node-id=1%3A2

## Dependencies
The following prerequisites are needed to run the demo.
- NPM: https://nodejs.org
- Truffle: https://github.com/trufflesuite/truffle
- Ganache: http://truffleframework.com/ganache/
- Metamask: https://metamask.io/


## Step 1. Clone the project
`git clone https://github.com/jessmch/TrustRank`

## Step 2. Install dependencies
```
$ cd election
$ npm install
```
## Step 3. Start Ganache

## Step 4. Compile & Deploy Smart Contract
`$ truffle migrate --reset`
(You must migrate the smart contract each time your restart ganache)

## Step 5. Configure Metamask
- Unlock Metamask
- Connect metamask to your local Etherum blockchain provided by Ganache (RPC Server)
- Import an account from Ganache by using the provided private key

## Step 6. Run the Front End Application
`$ npm run dev`

Then, visit this URL in your browser: http://localhost:3000

