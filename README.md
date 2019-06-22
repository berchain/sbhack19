# sbhack-app

## Description

## Instructions

```
Important Note: This is a PWA build for mobile. Please use a mobile phone to test the app or just open the browser console and change the view to mobile.
```

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