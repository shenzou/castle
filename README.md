# Castle

> Sleep well with Relais & Châteaux

![castle](https://media.relaischateaux.com/public/hash/919a5432f068d38d0b14b87e52fc27ae66c84376)

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [🐣 Introduction](#-introduction)
- [🎯 Objectives](#-objectives)
- [🏃‍♀️ Steps to do](#%E2%80%8D-steps-to-do)
  - [Stack](#stack)
- [👩‍💻 Just tell me what to do](#%E2%80%8D-just-tell-me-what-to-do)
- [🏃‍♀️ Example of Steps to do](#%E2%80%8D-example-of-steps-to-do)
  - [Investigation](#investigation)
    - [Hotels from Relais & Châteaux](#hotels-from-relais--ch%C3%A2teaux)
    - [Michelin Restaurant](#michelin-restaurant)
    - [The web application](#the-web-application)
  - [Server-side with Node.js](#server-side-with-nodejs)
    - [require('castle')](#requirecastle)
    - [require('michelin')](#requiremichelin)
  - [Client-side with React](#client-side-with-react)
  - [Notification (bonus)](#notification-bonus)
- [Don't forget](#dont-forget)
- [Licence](#licence)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 🐣 Introduction


## 🎯 Objectives

**List the best rates for each Weekend for France located Relais & Châteaux**

## 🏃‍♀️ Steps to do

Create a connection between [relaischateaux.com](https://www.relaischateaux.com), [restaurant.michelin.fr](https://restaurant.michelin.fr/) and the end-user.

### Stack

```
Node.js + React + Material Design (mdl, bootstrap, foundation...) + ES6 [+ docker + redis ...]
```

## 👩‍💻 Just tell me what to do

1. Fork the project via `github`

![fork](./fork.png)

1. Clone your forked repository project `https://github.com/YOUR_USERNAME/castle`

```sh
❯ cd /path/to/workspace
❯ git clone git@github.com:YOUR_USERNAME/castle.git
```

1. **Do things**

1. commit your different modifications:

```sh
❯ cd /path/to/workspace/castle
❯ git add -A && git commit -m "feat(michelin): get list of starred restaurants"
```

([why following a commit message convention?](https://www.conventionalcommits.org)

1. Don't forget to commit early, commit often and push often

```sh
❯ git push origin master
```

**Note**: if you catch an error about authentication, [add your ssh to your github profile](https://help.github.com/articles/connecting-to-github-with-ssh/).

1. If you need some helps on git commands, read [git - the simple guide](http://rogerdudler.github.io/git-guide/)

## 🏃‍♀️ Example of Steps to do

### Investigation

#### Hotels from Relais & Châteaux

1. How it works https://www.relaischateaux.com ?
1. How to get the list of Hotel + restaurant
1. How to identify the restaurant(s) name ?
1. How to compute the booking price for all weekend ? for a given weekend?

etc ...

Some things to do:

1. Browse the website
1. Check how that you can get list of hotels: api etc.... (check network activity)
1. Check how that you can get list of restaurants for a given hotel: api etc.... (check network activity)
1. define the JSON schema for Hotel

etc ...

Example of Hotel: https://www.relaischateaux.com/fr/france/mercues-lot-mercues

#### Michelin Restaurant

1. How it works https://restaurant.michelin.fr
1. What are the given properties for a starred restaurant: name, adress, town, stars, chef... ?
1. ...

Some things to do:

1. Browse the website
1. define the JSON schema for a restaurant
1. Check how that you can get list of starred restaurants: api etc.... (check network activity)

etc...

Example of Restaurant: https://restaurant.michelin.fr/2akhln2/lauberge-des-glazicks-plomodiern


#### The web application

Some things to do:

1. How to create a connection between Relais & Châteaux and the starred restaurant?

### Server-side with Node.js

#### require('castle')

Create a module called `castle` that returns the list of best rates for all Weekends for each Hotel

```js
const castle = require('castle');
...
const restaurant = {...};


const hotels = castle.getHotels();
const prices = castle.getPrices(restaurant);

...
```

Some things to do:

1. create the calls (api, http) to get the hotel page
1. get the restaurants name (by scraping or decoding api response)
1. check if the restaurant is starred.
1. get the price by Weekend (by scraping or decoding api response)

#### require('michelin')

Create a module called `michelin` that return the list of restaurant

```js
const michelin = require('michelin');

const starred = michelin.get();

...
```

Some things to do:

1. scrape list of France located starred restaurants
1. store the list into JSON file, nosql database (like redis, mongodb...)
1. create a node module that returns the list

### Client-side with React

MVP to do:

1. **For each Weekend, list best rates for France located Relais & Châteaux with starred restaurants**

Next features:

2. Add filters:
  * filtering by name
  * sorting by stars
  * sorting by price
  * sorting by distance
  
3. Bonus: Display on a map only Relais & Châteaux with starred restaurants.

### Notification (bonus)

Some things to do:

1. Notify me (discord or slack) a new best rate price for any Relais & Châteaux with starred restaurant.

## Don't forget

**Focus on codebase and UX/UI**

## Licence

[Uncopyrighted](http://zenhabits.net/uncopyright/)
