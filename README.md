# MEVN-boilerplate

## MongoDB + Express.js + Vue 3 + Node.js

##Step 1
Run in root-, client- and server folder
```
npm install 
```
##Step 2
Start client and server concurrently from root folder
```
npm start
```
Now your client will run on port 4001 and server on 4000

##Proxy
I have made a proxy on client side, so you can access your server from /api (you can see an example in HelloWorld.vue)

## Client:
* TailwindCSS
* Vue 3

## Server:
* Express.js
* Node.js
* Helmet
* Mongoose
* .env (optionally you can create it, it is imported)

## Make a production
In the client folder
```
npm run build
```
It will be compiled to the server folder's public directory.

**Now you can see your real production on localhost:4000**
