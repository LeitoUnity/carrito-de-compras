# Lider Challenge

# Welcome!

Hello! This is the lider challenge frontend module.

### Installation

For getting this module up and running you must build the docker image locally from the docker file. You can do it by running the following command from your terminal:

```sh
$ make frontend-build
```

This will create a docker image called **lider-frontend** that will let you run a container with the resulting image.

For running a docker container with this image just run:

```sh
$ make frontend-up
```

This will serve the frontend app on your **localhost:3000**

### Note: The page from this container may take some seconds to be available, please be patient :)

This frontend image have live-update feature, this means every change that is made to the files will update the page for it to be reflected, however changes made to the **package.json** file will require the container to be restarted.

### Restarting the container

For restarting the container just run this command in your terminal:

```sh
$ make database-reset
```

### Getting the container down

When you finish using the frontend remember to stop the container, for that just run the following command in your terminal:

```sh
$ make database-down
```

Anything else?, you are always welcome to have a look at the Makefile ;)
