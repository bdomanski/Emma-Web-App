import React from 'react';
import './App.css';
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        };
    }

    onLogin() {
        this.setState({ loggedIn: true });
    }

    onLogout() {
        this.setState({ loggedIn: false });
    }

    render() {
        return (
            <div>
                {
                    this.state.loggedIn
                    ? <HomePage
                        onLogout={this.onLogout.bind(this)}
                    />
                    : <LoginPage
                        onLogin={this.onLogin.bind(this)}
                    />
                }
            </div>
        );
    }
}

export default App;
