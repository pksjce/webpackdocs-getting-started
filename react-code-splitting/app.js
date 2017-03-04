import React, {Component} from 'react';

class App extends Component {
    render() {
	return <div> App component </div>;
    }
    componentWillMount() {
	require.ensure([], require => {
		console.log(this.props.path);
		require(this.props.path)
	    }, 'asd.js');
    }
}

export default App;