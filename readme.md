# Welcome to the Anythink Market repo

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

## First setup

Here are some easy steps to set up the project on your local enviornment.

1. Install and set up Docker on your PC. Since the installation is diffrent for diffrent OS, use the [docker docs](https://docs.docker.com/desktop/)
2.  Verify your installation by using `docker -v` and `docker-compose -v`. If you get a error message, it means something went wrong with your installation. Try to resolve the errors before moving on.
3.  Now fork, and clone the Anythink-Market repository.
4.  Open the terminal in the project's root directory and run `docker-compose up`. This will take a bit of time to build and pull images.
**Important Note** Please make sure that Docker Desktop is running before doing this step. Otherwise you will get a error saying `unable to create files`
5. Once your front end seems to have finished building, go to http://localhost:3000/api/ping to make sure it is running. If this page loads, you can move to the next step.
6. Go to http://localhost:3001/register and register yourself. This will ensure that the backend is working properly. You will also get logs for the account creation requests in your terminal
