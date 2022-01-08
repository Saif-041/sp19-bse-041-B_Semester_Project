# Partial Ecommerce site using MERN

This repo hosts a Express App in main folder and a React App in admin folder

## Run Locally

### Server

from main folder run

> npm install

> npm i nodemon -g

> npm run dev

Application will start at localhost:4000

### Client

> cd admin

> npm i

> npm start

react app will start at localhost:3000/admin

## Deploy

This application is heroku ready you must declare three environment variables namely

> jwtPrivateKey

> db

> sessionSecret

## default user

name:"saif",
email:"admin@admin.com"
password:"admin"
roles:["admin","customer"]

every user who has admin in its roles array will be able to modify the data.

## Remember!

locally react app will not be served from express. In order to do that you need to run following command from admin folder

> npm run build

## info

Live version is hosted at https://sp19-bse-041-B.herokuapp.com/
