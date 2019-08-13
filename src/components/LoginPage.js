import React from 'react';
import SignIn from '../material/SignIn';

const correctLogin = {
    username: 'emma',
    password: 'test'
}

class LoginPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            remember: false
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.username === correctLogin.username && this.state.password === correctLogin.password) {
            this.props.onLogin();
        }
    }

    handleChange(event) {
        var value = event.target.name === "remember" ? event.target.checked : event.target.value;
        this.setState({ [event.target.name]: value });
    }

    render() {
        return (
            <SignIn
                onSubmit={this.handleSubmit.bind(this)}
                onChange={this.handleChange.bind(this)}
            />
        );
    }
}

export default LoginPage;
