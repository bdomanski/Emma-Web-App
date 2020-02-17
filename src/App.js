import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
// import Confetti from 'react-confetti';
import BackGround from './images/canals.jpg';

Amplify.configure(awsconfig);

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            width: window.innerWidth,
        };
        document.title = 'Birthday App';
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    // make sure to remove the listener
    // when the component is not mounted anymore
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    render() {
        const { width } = this.state;
        const isMobile = width <= 1200;

        return (
            <div className="admin-bg">
                {/* <Confetti recycle={false} numberOfPieces={400} height={document.documentElement.scrollHeight}/> */}
                <img src={BackGround} alt="bg" className="bg"/>
                <Welcome isMobile={isMobile}/>
            </div>
        );
    }
}

export default App;
