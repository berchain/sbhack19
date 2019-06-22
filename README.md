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
