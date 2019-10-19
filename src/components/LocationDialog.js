import React from 'react';
import PropTypes from 'prop-types';

import { styles } from '../material/constants';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MyLocation from '@material-ui/icons/MyLocation';
import IconButton from '@material-ui/core/IconButton';

class LocationDialog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            name: '',
            lat: null,
            long: null
        };
    }

    handleClickOpen() {
        this.setState({ open: true });
    }

    handleClose() {
        this.setState({
            open: false,
            name: '',
            lat: null,
            long: null
        });
    }

    handleNameChange(event) {
        this.setState({ name: event.target.value })
    }

    handleCoordChange(event) {
        event.target.id === 'lat'
            ? this.setState({ lat: event.target.value })
            : this.setState({ long: event.target.value });
    }

    handleNewLocation() {
        if(this.state.lat && this.state.long && this.state.name !== '') {
            this.props.handleNewLocation(this.state.lat, this.state.long, this.state.name, this.props.value);
        }
        this.handleClose();
    }

    render() {
        const { classes } = this.props;

        return (
        <div>
        <IconButton
            edge="end"
            aria-label="location"
            onClick={this.handleClickOpen.bind(this)}
            color='primary'
            className={classes.locationButton}>
            <MyLocation/>
        </IconButton>
        <Dialog open={this.state.open} onClose={this.handleClose.bind(this)} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Location</DialogTitle>
            <DialogContent>
            <TextField
                required
                autoFocus
                margin="dense"
                id="city"
                label="City"
                type="email"
                onChange={this.handleNameChange.bind(this)}
                fullWidth
                multiline
            />
            <TextField
                required
                margin="dense"
                id="lat"
                label="Latitude (°N)"
                type="email"
                onChange={this.handleCoordChange.bind(this)}
                fullWidth
            />
            <TextField
                required
                margin="dense"
                id="long"
                label="Longitude (°W)"
                type="email"
                onChange={this.handleCoordChange.bind(this)}
                fullWidth
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={this.handleClose.bind(this)} color="primary">
                Cancel
            </Button>
            <Button onClick={this.handleNewLocation.bind(this)} color="primary">
                Create
            </Button>
            </DialogActions>
        </Dialog>
        </div>
    );
    }
}

LocationDialog.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LocationDialog);
