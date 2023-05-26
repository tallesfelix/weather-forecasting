# Get started with the project

You will need some API keys to get started with the project, and you can get them by going into the providers we are using on the project. Two API's are being used here, for both google maps e for weather forecasting.

To get API keys for google maps you can get started here [here](https://developers.google.com/maps).

To get API keys for weather forecasting you can go to [Visual Crossing](https://www.visualcrossing.com/) website.

The variables are named as `REACT_APP_VISUAL_CROSSING_KEY` and `REACT_APP_GOOGLE_MAPS_KEY`

After getting the keys, run `npm install` to install dependencies and then `npm start` to get the project running locally.

## Running tests

You can run the tests locally from your terminal by running:

```bash
  npm test
  ```

  Test are still being improved :)

## Project structure and data flow

Main folder structure is basically contained within `./src` being presented like

```
  /src
    /assets
      /icons
    /client
    /components
    /hooks
    App.tsx
```

The project follows a principle contained within the idea of [presentational and container components](https://www.freecodecamp.org/news/separation-of-concerns-react-container-and-presentational-components/) with a few takeaways since most of the logic is abstracted to custom hooks and most of the components only care about how they will render the generated data.

This should enable low coupling between styles/components changes and the data that flow through the app. Creating components that we can throw away easily and still maintain our logic.

A simple global state manager like context can be considered here since the data that is relevant to be stored does change very often, and by the time this data changes, most of the components should already be re-rendered. Although, that approach was not used since prop drilling was (still) not an issue.


