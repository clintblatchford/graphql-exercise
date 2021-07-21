# GraphQL Exercise

There are 2 main folders:

- `server`: The starting point of the GraphQL server.
- `client`: The starting point of the React application.

To get started running the app

In a Terminal window,

1. Navigate to the `server` folder.
1. Run `npm install`
1. Run `npm start`.

This will start the GraphQL API server.

In another Terminal window,

1. Navigate to the `client` folder.
1. Run `npm install`.
1. Run `npm start`.

Feel free to use 'yarn install' and 'yarn start' if you prefer

This will open up `localhost:3000` in your web browser.

Some quick notes

- The React app 
1. Uses Material UI for quick "out of the box" components
2. Was bootstrapped using create-react-app
3. Has a mix of inline and stylized styling (this was more for speed than anything else)

- The Apollo GraphQL server 
1. Heavily influenced by the Odyssey tutorials

This application contains 3 queries in total
  - Queries
    1. getLaunchesByMissionName
    2. getLaunchesByRocketName
    3. getLaunchesByLaunchYear

    Each query makes a get request via to the Space X api through and extension of RESTDataSource supplying the appropriate variable name based on the type of search (mission, rocket, year) along with the user supplied search term. Each query essentially
    operates in the same way, the only difference between them is the variable used in the get request. 

    All queries can be found in client/src/DataTable.js
    All get requests can be found in server/src/datasources/launch-api.js
   