import React from 'react';
import emoji from 'node-emoji';
import PropTypes from 'prop-types';

import { styles } from '../material/constants';
import Home from './Home';
import Calendar from './Calendar';
import Email from './Email';
import Countdown from './Countdown';
import Forecast from '../api/Forecast';

import Geocode from 'react-geocode';

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
            Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'. Built with '}
        <Link color="inherit" href="https://material-ui.com/">
            Material-UI.
        </Link>
        </Typography>
    );
}

const sections = {
    Home: <Home/>,
    Calendar: <Calendar/>,
    Countdown: <Countdown/>,
    Email: <Email/>
};

// TODO: https://joanmira.com/tutorial-build-a-weather-app-with-react/
class Welcome extends React.Component {

    constructor(props) {
        super(props);

        Geocode.setApiKey("AIzaSyCUSXmTzy8UPJarrWqvfeTGVs_fe-L_qpU");

        const currentPage = window.location.href.split('/').pop();

        this.state = {
            body: sections[currentPage] ? sections[currentPage] : <Home/>
        };
    }

    onSectionChange(event) {
        this.setState({ body: sections[event.target.text] });
    }

    getBody() {
        return this.state.body;
    }

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg" spacing={2}>
            {/* Header */}
                <Toolbar className={classes.toolbar}>
                <Forecast latitude={42.9634} longitude={-85.6681} name='Grand Rapids' />
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    {emoji.emojify('Happy Birthday Emma! :heart:')}
                </Typography>
                <Forecast latitude={42.2808} longitude={-83.7430} name='Ann Arbor' />
                </Toolbar>
                <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                {Object.keys(sections).map(section => (
                    <Link
                    color="inherit"
                    noWrap
                    key={section}
                    variant="body2"
                    href={`#/${section}`}
                    className={classes.toolbarLink}
                    onClick={this.onSectionChange.bind(this)}
                    >
                    {section}
                    </Link>
                ))}
                </Toolbar>
                <Divider className={classes.divider}/>
            {/* End Header */}
            {/* Body */}
                {this.getBody()}
            {/* End Body */}
            </Container>
            {/* Footer */}
            <footer className={classes.footer}>
                <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    TODO:
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Pick location for weather data
                </Typography>

                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Complete countdown - persist data, add new countdowns, add image for countdown
                </Typography>

                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Happy birthday homepage
                </Typography>

                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Update Google Calendar
                </Typography>

                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Create image set / blog entries / something to replace texting
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Save images in one tab, use them in countdowns, main page, etc
                </Typography>
                <Copyright />
                </Container>
            </footer>
            {/* End footer */}
            </React.Fragment>
        );
    }
}

Welcome.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Welcome);
