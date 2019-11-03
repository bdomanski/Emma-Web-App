import React from 'react';
import emoji from 'node-emoji';
import PropTypes from 'prop-types';

import { styles } from '../material/constants';
import Home from './Home';
import Calendar from './Calendar';
import Email from './Email';
import Countdown from './Countdown';
import Forecast from '../api/Forecast';
import LocationDialog from './LocationDialog';
import { Compliment } from '../api/ComplimentPicker'

import Geocode from 'react-geocode';

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const sections = {
    NOTES: <Home/>,
    CALENDAR: <Calendar/>,
    COUNTDOWN: <Countdown/>,
    SOON: <div/>
};

// TODO: https://joanmira.com/tutorial-build-a-weather-app-with-react/
class Welcome extends React.Component {

    constructor(props) {
        super(props);

        Geocode.setApiKey("AIzaSyCUSXmTzy8UPJarrWqvfeTGVs_fe-L_qpU");

        const currentPage = window.location.href.split('/').pop();

        this.state = {
            body: sections[currentPage] ? sections[currentPage] : <Home/>,
            locs: JSON.parse(localStorage.getItem('locations')) || ['Grand Rapids', 'Ann Arbor'],
            lats: JSON.parse(localStorage.getItem('latitudes')) || [42.9634, 42.2808],
            longs: JSON.parse(localStorage.getItem('longitudes')) || [-85.6681, -83.7430]
        };
    }

    handleLocationChange(lat, long, name, id) {
        const newLocs = this.state.locs.slice();
        const newLats = this.state.lats.slice();
        const newLongs = this.state.longs.slice();
        newLocs[id] = name;
        newLats[id] = lat;
        newLongs[id] = -long;

        this.setState({
            locs: newLocs,
            lats: newLats,
            longs: newLongs
        });

        localStorage.setItem('locations', JSON.stringify(newLocs));
        localStorage.setItem('latitudes', JSON.stringify(newLats));
        localStorage.setItem('longitudes', JSON.stringify(newLongs));
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
            <Container fixed maxWidth="lg" spacing={2} className={classes.container}>
            {/* Header */}
                <Toolbar className={classes.toolbar}>
                    <Grid xl container direction="row" justify="center" alignItems="flex-start" spacing={2} className={classes.topGrid}>
                        <LocationDialog handleNewLocation={this.handleLocationChange.bind(this)} value={0} />
                        <Forecast latitude={this.state.lats[0]} longitude={this.state.longs[0]} name={this.state.locs[0]} />
                        <Grid xl className={classes.topGrid}>
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
                            <Typography align="center">
                                Compliment of the day:
                            </Typography>
                            <Typography align="center">
                                {Compliment((new Date()).getDate())}
                            </Typography>
                        </Grid>
                        <LocationDialog handleNewLocation={this.handleLocationChange.bind(this)} value={1} />
                        <Forecast latitude={this.state.lats[1]} longitude={this.state.longs[1]} name={this.state.locs[1]} />
                    </Grid>
                </Toolbar>
                <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                {Object.keys(sections).map((section, i) => (
                    <Link
                    key={section}
                    color="inherit"
                    noWrap
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
                <Divider className={classes.divider}/>
                <Email/>
            </Container>
            </React.Fragment>
        );
    }
}

Welcome.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Welcome);
