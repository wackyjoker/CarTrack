### `npm start`

do `npm start` in terminal <br />
which will implement `node server.js` <br />
Runs the app in the Production mode.<br />
<strong>NOTE: do `npm run build` first to Create a Production Build first </strong>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

### `npm run dev start`

do `npm run dev start` in terminal <br />
which will implement `webpack-dev-server --watch --open --mode development --colors` <br />
Runs the app in the development mode.<br />
Open [http://localhost:9000](http://localhost:9000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

do `npm run build` in terminal <br />
which will implement `webpack --env production --config webpack.config.js` <br />
Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
