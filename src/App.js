import React from 'react';
import './App.css';
import Welcome from './components/Welcome';

class App extends React.Component {

    constructor(props) {
        super(props);
        document.title = 'Birthday App';
    }

    onLogout() {
        console.log("Make this do something");
    }

    render() {
        return (
            <Welcome
                onLogout={this.onLogout.bind(this)}
            />
        );
    }
}

export default App;
