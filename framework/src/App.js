require('../styles/main.scss');
require('../fonts/fonts.scss');

module.exports = class App {
    constructor(routes, notifications, storage) {

        this.routes = routes;

        this.localStorage = storage;
        this.watchFace = document.getElementById("watch-face");

        const hideNotification = () => {
            this.navigateToLocation(window.location, this.props);
        }

        NotificationHub.onHide(hideNotification);
    }

    navigateToLocation(location, props = {}) {
        let path = location.hash.slice(1);
        if (path === "") {
            path = "/";
        }
        this.navigate(path, props);
    }

    navigate(path, props = {}) {
        this.props = props;
        const Page = this.routes[path] || this.routes["404"];
        this.render(this.watchFace, Page, props);
        window.location.hash = path;
    }

    render(element, ViewType, props) {

        const view = new ViewType({
            ...props,
            navigate: this.navigate,
            watchFace: this.watchFace,
            localStorage: this.localStorage,
        })

        this.setupEventListeners(view);
        view.pageWillLoad();
        element.innerHTML = view.template();
        view.pageDidLoad();
    }
};