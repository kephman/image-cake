import React from 'react';

const propTypes = {};
const defaultProps = {};

class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isShowTest: false,
        };
    }

    onClick() {
        const { isShowTest } = this.state;
        this.setState({ isShowTest: !isShowTest });
    }

    render() {
        const { isShowTest } = this.state;

        return (
            <div>
                <h1>TODO: create the home page</h1>
                <button type="button" onClick={this.onClick.bind(this)}>{ isShowTest ? 'Hide' : 'Show' }</button>
                { isShowTest ? (<div>Test works!</div>) : null }
            </div>

        );
    }
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;
Home.displayName = 'Home';

export default Home;
