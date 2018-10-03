const App = require('../src/App');
const BasePage = require('../src/BasePage');
const calculatorTemplate = require('../templates/watch.hbs')

describe('App', () => {
    document.body.innerHTML = calculatorTemplate();

    let calculator = {};
    let routes = {};
    let notifications = [
        { type: 'blah', label: 'test', defaultValue: '' }
    ];
    let app;

    class DummyPage extends BasePage {
        template() {
            return '<div>Some page</div>';
        }
    }

    class DummyPage2 extends BasePage {
        template() {
            return `<div>${this.props.message}</div>`;
        }
    }
});