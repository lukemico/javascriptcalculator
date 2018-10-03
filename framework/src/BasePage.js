class BasePage {
    constructor(props = {}) {
        this.props = props;
        this.localStorage = props.localStorage;
    }

    template() {
        throw new Error('Unimplemented template');
    }

    pageWillLoad() {}

    pageDidLoad() {}
}

module.exports = BasePage;