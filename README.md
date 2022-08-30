# ecommerce-backend

This code base contains logic/structure for ecommerce backend
## Features
* Client can request the Notification system to send notifications to all the recipeints
* Notfification Service will run a job every 30 seconds to gather all the requests for last 30 seconds and send notifications


More details around this can be found [here](https://docs.google.com/document/d/1BBZSD4MQFWPE-yXs6gFyP7KUfxgBjLCzbVrH-vjK3Do/edit?usp=sharing)

## How is the code organized in this repo ?
The whole codebase is present in the single branch [main]

## Prerequisite
- Understanding of Node.js
- Understanding of Async Await
- Mongo DB locally installed and running

## Tech
- Node.js
- mySQL


## Installation

this app requires [Node.js](https://nodejs.org/) v14+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd ecommerce-backed
npm install
npm run devStart
```

## Rest endpoints
#### 1. Raise a new ecommerce-backed request

```sh
POST /category/all
Headers :
 Content-Type:application/json
Make the changes and raise a PR. Reach out to me over budayteja009@gmail.com
