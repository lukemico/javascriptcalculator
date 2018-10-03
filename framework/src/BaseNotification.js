const BasePage = require('./BasePage');

class BaseNotification extends BasePage {
    template() {
        return compiledTemplate(this.props);
    }
}

module.exports = BaseNotification;