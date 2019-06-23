# FairChain

## The Problem

- The supply chain of ethical and sustainable food products is not transparent; neither the journey of the product nor the process of certification is transparent to the consumer. This undermines the trust in those certificates, which doesn’t help the cause of ethical & sustainable food production itself.
- Consumers are willing to spend additional premium (up to €0,20/kilo of bananas) on products that are certified as fairtrade, but there are two main barriers:
  - Consumers don’t know what’s behind the certificate mark: what it means, what criteria the product has to meet, who are the producers etc. Research shows that 50% of consumers are still not familiar with Fairtrade label.
  - Moreover, consumers don’t know how much of the higher margin for the fairer products ends up in the pockets of workers and growers or supporting the cause.

## Our Goals

- Bring transparency to the supply chain of the sustainable & ethical food products, including the certification process itself, which would help to grow the cause (number of certified products and producers).
- Incentivize consumers to choose sustainable & ethical food products by informing them about the standards that the products meet.  
- Connect the consumers with the food producers through the mechanism guaranteeing that their support (donation) goes back directly to the cause and the community of producers.

## Our Concept: FAIRCHAIN

We create a platform that enables consumers to:

  1. Trace the product journey through the supply chain, learn more about the producer (farmer), understand the complexity of supply chain (length of the journey), see how the price of the product increases along the way.
  
     → Data is stored on IPFS and then registered on blockchain

  2. See the proof of certification

     → Issued and secured on blockchain

  3. Learn more about the standards behind the given certificate(s) and to understand the impact of buying the ethical & sustainable food.

  4. Support the producers and the cause (which the certificate represents) through the donation mechanism, which goes directly to the producer (and its community) and can be tracked.

     → Smart contracts facilitate the donations, KYC through Calibra (facebook wallet)

Our solution is not limited to one certificate only (as shown in the demo) and can work for multiple certificates that product has. It works as a white-label meaning that it can be used by any brand, or retailer that sells products with the certificates. It is proposed as a solution for food and agriculture sector, but it can be used by other products that are certified (e.g. fashion).

## Assumptions

- Consumers

  - If they have a proof that the more expensive certified (ethical & sustainable) food product is actually authentic and the farmer is getting a fair share of the higher price, they’re willing to continue paying more for those products;
  - They are also more likely to support the producer knowing that this micro-donation (e.g. €0,20) goes directly to the producer.

- Food producers

  - Those who are going the extra mile to get the certificates would be happy to show the consumers how much it costs not only to produce the ethical and sustainable food, but also how much it cost to get the certificates and meet the higher standards.
  - Farmers who are not there yet (for various reasons) would be incentivized to get the higher standards knowing that the process of certification is fully transparent and that consumers reward that.

- Certification associations

  - It is in their interest to make the certification process fully transparent (and immutable, eliminating risks of corruption) and attract more consumers to buy these products, which would in turn incentivize more producers to meet their standards and get the certificates.

- Retailers

  - All retailers, even the discount markets like Lidl, sell certified products e.g. Fairtrade, which are more expensive. Higher sales of these products means higher revenues for the retailer.
  - At the same time it is a way for retailers to market themselves as supporting ethical and sustainable products.

## Instructions

```
Important Note-1: Follow the instructions carefully and DO NOT use your mainnet account.
Important Note-2: Best looks and works in the desktop browser mobile view.
```

1. Install MetaMask and set it up. You can find it here:
   [Chrome](https://chrome.google.com/webstore/detail/nkbihfbeogaeaoehlefnkodbefgpgknn), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/), [Opera](https://addons.opera.com/en/extensions/details/metamask/)
2. Add Custom RPC to your MetaMask: `http://3.121.195.79:8545`.
3. Import any of the private keys in the MetaMask so that you can have a working account on our network.
   Both account come with preloaded ethers and some tokens that you can use.
    - `0xe5184ebb7011f9b796cd114099886099f892dae15e786328acd869d9ec6cfc34`
    - `0xfeafd5aded804f8fd5310a2f441f54631ac5ac75c739cf7b1206b25e763f9a24`
4. Now, you're all set up. Open the [App](http://3.121.195.79:8080).

## Demos(Before accessing the app follow the instructions above)

- [App](http://3.121.195.79:8080)
- [Project Repo](https://github.com/berchain/sbhack19)

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server(use docker instead, see below)
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate

#compile contracts
$ yarn run compile

# migrate/deploy contracts
$ yarn run migrate
```

## Docker

```bash
# build your own image
$ make docker-build

# OR get the one that we've built for you
$ docker pull shekharshubhendu/sbhack19-berchain:latest

# launch the container and open localhost:8080
$ docker run --name sbhack19-berchain -p 8080:80 sbhack19-berchain:latest
```

## Our Dev Stack

- [MetaMask](https://metamask.io/)
- [Nuxt.js](https://nuxtjs.org)
- [Ethereum](https://www.ethereum.org/)
- [Solidity](https://github.com/ethereum/solidity)
- [Web3.js](https://github.com/ethereum/web3.js)
- [Truffle Suit](http://trufflesuite.com)
- [IPFS](https://ipfs.io)
- [Docker](https://www.docker.com/)
- [Nginx](https://www.nginx.com/)
- [AWS](https://aws.amazon.com/)

## License

MIT License

Copyright (c) 2019 BerChain

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
