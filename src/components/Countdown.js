import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

import { styles } from '../material/constants';
import CountdownDialog from './CountdownDialog';

import { withStyles } from '@material-ui/core/styles';
import Checkbox from '../images/checkbox.png';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/moment';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';

class Countdown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedDate: new Date(),
            startTime: Moment(),
            countdownItems: JSON.parse(localStorage.getItem('countdownItems')) || []
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
        return difference > 0
            ? `${Moment(endTime).diff(Moment(), 'days')}:${this.pad(duration.hours())}:${this.pad(duration.minutes())}:${this.pad(duration.seconds())}`
            : 'Complete!';
    }

    getListItems() {
        const { classes } = this.props;

        return this.state.countdownItems.map((item, index) => (
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar alt="Checkbox" src={Checkbox} />
                    </Grid>
                    <Grid item xs>
                        <Typography variant='h5'>{item.name}</Typography>
                        <Typography variant='subtitle2'>{this.getTimeDiff(item.endTime)}</Typography>
                    </Grid>
                    <Grid item>
                        <IconButton edge="end" aria-label="delete" onClick={this.handleDelete.bind(this)} value={index}>
                            <DeleteIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Paper>
        ));
    }

    handleNewCountdown(name, selectedDate) {
        this.state.countdownItems.push({
            name: name,
            endTime: selectedDate
        });
        this.state.countdownItems.sort((a, b) => (Moment(a.endTime) > Moment(b.endTime)) ? 1 : -1)
        localStorage.setItem('countdownItems', JSON.stringify(this.state.countdownItems));
    }

    handleDelete(event) {
        this.state.countdownItems.splice(event.currentTarget.value, 1);
        localStorage.setItem('countdownItems', JSON.stringify(this.state.countdownItems));
        this.setState({ countdownItems: this.state.countdownItems });
    }

    render() {
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                    <Grid item>
                        <CountdownDialog handleNewCountdown={this.handleNewCountdown.bind(this)}/>
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
