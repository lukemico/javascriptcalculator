const App = require('watch-framework').App;

const routes = require("./js/routes");

new App(routes, window.localStorage).navigateToLocation(window.location);