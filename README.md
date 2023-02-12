
# TrustRank - Authentic Reviews
In this project, we let users enter the product information they have bought from a store, and they will be approved to upload their review to the website as long as they can provide a proof of purchase, which will be automatically verified using our smart contract.

**Full Demo:**
https://youtu.be/Exi922e-ZK4

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

