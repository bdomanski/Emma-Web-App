import React from 'react';
import emoji from 'node-emoji';
import PropTypes from 'prop-types';

import { styles } from '../material/constants';
import Home from './Home';
import Calendar from './Calendar';

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

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
    Countdown: <countdown/>,
    Texting: <texting/>
};

class Welcome extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            body: <Home/>
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
            <Container maxWidth="lg">
            {/* Header */}
                <Toolbar className={classes.toolbar}>
                <Button size="small">Subscribe</Button>
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
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <Button variant="outlined" size="small" onClick={() => this.props.onLogout()}>
                    Sign Out
                </Button>
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
            {/* End Header */}
            {/* Body */}
                {this.getBody()}
            {/* End Body */}
            </Container>
            {/* Footer */}
            <footer className={classes.footer}>
                <Container maxWidth="lg">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                    Something here to give the footer a purpose!
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
