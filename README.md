# Lider Challenge

# Welcome!

Hello! This is the lider challenge project.

### Installation

For getting this project up and running you must build the docker images locally from the docker files disposed on every module of the project. You can do that by running the following commands from your terminal:

## Getting the project up

### First, let's create the network all this project containers will use

```sh
$ docker network create --gateway 172.16.1.1 --subnet 172.16.1.0/24 lider
```

### Creating docker images

After the network is created we can setup the project by running the following command:

```sh
$ make project-setup
```

This will create the docker images for every module of the project (Front and Back end) for them to be used later when starting the project.

### Getting the project up

- This project consists of three containers:
  - Database Container: This container runs a mongodb image and it's populated with prehandled offered by our friends at lider :)
  - Backend Container: This container runs a node image and serves an API for the frontend to access DB Container data
  - Frontend Container: This container runs a node + nginx image and serve the products on the UI, permitting the user to add them to a cart and evaluate for discounts

For the project to start just run the following command in your terminal:

```sh
$ make project-start
```

This will get all containers up and running.

### Restarting the project

For restarting the project just run this command in your terminal:

```sh
$ make project-reset
```

### Getting the project down

When you finish using the project remember to stop it, for that just run the following command in your terminal:

```sh
$ make project-down
```

### Testing and Deploying

Sadly I ran out of time before being able to implement automated testing on this project as well as deploying on heroku.

Anything else?, you are always welcome to have a look at every project module Makefiles ;)
