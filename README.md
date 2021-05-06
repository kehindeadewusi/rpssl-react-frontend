# RPSSL React Frontend
The Frontend for Rock, Paper, Scissors, Spock, Lizard, a very popular game.

```
Note: This code uses react@17 and is tested OK on Node v14. 
```

## Connecting to the API
The API URL must be provided in the **API URL** input on the UI at all times, it defaults to  `http://localhost:8081`. Point this at the URL of the golang API.

## Running the app

In the project directory, you can run:

### `yarn start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`
Launches the test runner in the interactive watch mode.

### `yarn build`
Builds the app for production to the `build` folder.

```
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
```

## Credits
To Maximilian Schwarzmuller: https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25595350?start=0#overview
I borrowed the css in the tutorial and ideas aplenty.

## Developer notes
Yea, there are many rooms for improvement, for one, the UI is not exactly that much greater than the old one :). The following are great to have:

1. I duplicated a bit of functionalities, because I decided the code was not big enough to worry too much about state management, bad :|.
1. Updating multi-player screens can make great use of websockets.
1. Oh, that UI again :)
