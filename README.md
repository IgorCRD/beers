# beer lovers

Look for your favorite beers from the punk API.

### Prerequisites

Your must have a compatible version of node and preferably* yarn installed in your machine.

\* npm must work just as good, but this project was not developed or tested using npm.

### Running in your local machine

To put it to work right away:

1. install all project dependencies with ```yarn install```
2. start the development server with ```yarn dev```

### Building to production

Follow the steps bellow to produce a production ready bundle:

1. install all project dependencies with ```yarn install```
2. generate the production ready bundle with ```yarn build```
3. serve the bundle with ```yarn start```

### Heroku support

All configuration needed for deploying it to heroku is already made. So all you need to do to deploy to heroku is:

1. git clone https://github.com/IgorCRD/beers.git
2. cd beers
3. heroku create [appName]
4. git push heroku master

PS.: You must have the Heroku CLI installed and logged in your machine
