
# the-office-graphql 

## Description

A GraphQL interface for [The Office API](https://www.officeapi.dev/), powered by [Nest.js](https://github.com/nestjs/nest) and [Axios](https://github.com/axios/axios).

## Running the API

You can use [docker-compose](https://docs.docker.com/compose/) to run the application:
```bash
$ docker-compose up -d # the -d option runs the containers in the background
```
Or simply run it with Yarn:
```bash
yarn start:dev
```
This starts the server at the port defined by the PORT environmental variable, defaulting to the 3000 port if none is set. 
  

## Usage

The GraphQL Playground(and server) can be accessed at the `/graphql` endpoint, and the available resolvers are: 

 - `characters`
 - `crew`
 - `episodes`
 - `quotes`

The available fields will be hinted by the Playground, and this is an example query that get data from all of them:
```graphql
query{
  characters{
    firstname
    lastname
  }
  crew {
    name
    role
  }
  episodes {
    title
    writer{
      name
    }
  }
  quotes {
    content
    character {
      firstname
    }
  }
}
```

