# FairChain

## Description

> App description goes here

## Instructions

```
Important Note-1: Follow the instructions carefully and DO NOT use your mainnet account.
Important Note-2: Best looks and works in the browser mobile view.
```

1. Install MetaMask and set it up. You can find it here:
   [Chrome](https://chrome.google.com/webstore/detail/nkbihfbeogaeaoehlefnkodbefgpgknn), [Firefox](https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/), [Opera](https://addons.opera.com/en/extensions/details/metamask/)
2. Add Custom RPC to your MetaMask: `http://3.121.195.79:8545`.
3. Import any of the private keys in the MetaMask so that you can have a working account on our network.
   Both account come with preloaded ethers and some tokens that you can use.
    - `0xe5184ebb7011f9b796cd114099886099f892dae15e786328acd869d9ec6cfc34`
    - `0xfeafd5aded804f8fd5310a2f441f54631ac5ac75c739cf7b1206b25e763f9a24`
4. Once you're set up. Open the [App](http://3.121.195.79:8080)

## Active Deployment

- [App](http://3.121.195.79:8080)
- [Project Video](google.com)

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

## Build for Docker

```bash
# build image
$ make docker-build

# launch the container and open localhost:8080
$ docker run --name sbhack19-berchain -p 8080:80 sbhack19-berchain:latest
```

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
