import React from 'react';
import PropTypes from 'prop-types';

import { styles } from '../material/constants';
import CountdownDialog from './CountdownDialog';

import { withStyles } from '@material-ui/core/styles';
import Checkbox from '../images/checkbox.png';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/moment';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import {
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import Moment from 'moment';

class Countdown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDate: new Date(),
            startTime: Moment(),
            countdownItems: [
                {
                    name: "Brian's Birthday",
                    endTime: "2019-12-03T00:00:00"
                },
                {
                    name: "Chistmas",
                    endTime: "2019-12-25T00:00:00"
                },
                {
                    name: "Spring Break",
                    endTime: "2020-03-01T00:00:00"
                },
                {
                    name: "This is a really long example to see if the text wraps",
                    endTime: "2020-03-11T00:00:00"
                }
            ]
        };
    }

    componentDidMount() {
        this.interval = setInterval(() => this.setState({ startTime: Moment() }), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    pad(num, size) {
        var s = String(num);
        while (s.length < (size || 2)) {s = "0" + s;}
        return s;
    }

    getTimeDiff(endTime) {
        let difference = Moment(endTime).unix() - Moment().unix();
        let duration = Moment.duration(difference * 1000, 'milliseconds');
        return `${Moment(endTime).diff(Moment(), 'days')}:${this.pad(duration.hours())}:${this.pad(duration.minutes())}:${this.pad(duration.seconds())}`;
    }

    getListItems() {
        const { classes } = this.props;
        return this.state.countdownItems.map(item => (
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                    <Avatar alt="Checkbox" src={Checkbox} />
                </Grid>
                <Grid item xs>
                    <Typography>{`${item.name}: ${Moment(item.endTime).format('MM/DD/YYYY')}`}</Typography>
                    <Typography>{this.getTimeDiff(item.endTime)}</Typography>
                </Grid>
                </Grid>
            </Paper>
        ));
    }

    render() {
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                    <Grid item>
                        <CountdownDialog/>
                    </Grid>
                    <Grid item>
                        {this.getListItems()}
                    </Grid>
                </Grid>

            </MuiPickersUtilsProvider>
        );
    }
}

Countdown.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Countdown);
