# Authentication JWT with NestJS

Authentication module for websites by an email and password with @nestjs/jwt library.

JSON Web Token (JWT) is a more secure authenticantion for every app where you sign in by an username and password. Is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. 

In authentication, when the user successfully logs in using their credentials, a JSON Web Token will be returned. Since tokens are credentials, great care must be taken to prevent security issues. In general, you should not keep tokens longer than required.

This project aims to make apps more safe, using sturdy technologies for maximum security.


## Features

* `@nestjs/config` integrated to configure database connection
* Database connection configured by default is SQL Server
* Database consults are handled with Typeorm library
* Requests and Responses DTO handled with class-validator library


## Installation

You need to install [Node](https://nodejs.org/en/) first. 

Then, you can install [NestJS](https://docs.nestjs.com/) by running next command:
```bash
$ npm i -g @nestjs/cli
```

Finally, install all project dependencies running next command:
```bash
$ npm install
```


## Routes

Here are the routes you need to use:

* `/auth` (Post): generates token for registered user
```bash
# Request 
{
  "email": "email@mail.com",
  "password": "123456"
}
```

* `/user` (Post): creates a new user
```bash
# Request
{
  "email": "email@mail.com",
  "password": "123456"
}
```

* `/user/get-profile` (Get): gets user token information. You need to call this endpoint setting the previous generated token in header as Bearer Token


## Local Development

You can run these on the command line in the root of your project:

* `npm start`: starts development server
* `npm run build`: generates a production build

To customize the port, JWT parameters and database connection, edit `src/.env` with your details.

Once you have configured `.env` file and ran the project, the `User` entity is going to be generated in database automaticly; this is because `autoLoadEntities` property is enabled in `src/database/database.module.ts`. `Synchronize` property is enabled too.
