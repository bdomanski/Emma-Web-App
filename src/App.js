import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import Confetti from 'react-confetti';
import BackGround from './images/canals.jpg';

Amplify.configure(awsconfig);

class App extends React.Component {

    constructor(props) {
        super(props);
        document.title = 'Birthday App';
    }

    render() {
        return (
            <div className="admin-bg">
                <Confetti recycle={false} numberOfPieces={400} height={document.documentElement.scrollHeight}/>
                <img src={BackGround} alt="bg" className="bg"/>
                <Welcome/>
            </div>
        );
    }
}

export default App;
