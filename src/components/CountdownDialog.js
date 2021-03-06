import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';

import { styles } from '../material/constants';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
    KeyboardDatePicker,
} from '@material-ui/pickers';

class CountdownDialog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            selectedDate: null,
            name: ''
        };
    }

    handleClickOpen() {
        this.setState({ open: true });
    }

    handleClose() {
        this.setState({ open: false });
    }

    handleDateChange(date) {
        this.setState({ selectedDate: Moment(`${date.format('YYYY-MM-DD')}T00:00:00`) });
    }

    handleNameChange(name) {
        this.setState({ name: name.target.value });
    }

    handleNewCountdown() {
        this.props.handleNewCountdown(this.state.name, this.state.selectedDate);
        this.handleClose();
    }

    render() {
        const { classes } = this.props;

        return (
        <div>
        <Button variant="contained" color="primary" size="large" onClick={this.handleClickOpen.bind(this)} className={classes.noteButton}>
            New Countdown
        </Button>
        <Dialog open={this.state.open} onClose={this.handleClose.bind(this)} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Countdown</DialogTitle>
            <DialogContent>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Name"
                type="email"
                onChange={this.handleNameChange.bind(this)}
                fullWidth
                multiline
                rowsMax="2"
            />
            <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/DD/YYYY"
                margin="normal"
                id="date-picker-inline"
                label="Event Date"
                value={this.state.selectedDate}
                onChange={this.handleDateChange.bind(this)}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={this.handleClose.bind(this)} color="primary">
                Cancel
            </Button>
            <Button onClick={this.handleNewCountdown.bind(this)} color="primary">
                Create
            </Button>
            </DialogActions>
        </Dialog>
        </div>
    );
    }
}

CountdownDialog.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CountdownDialog);
