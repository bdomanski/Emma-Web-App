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

class HomeDialog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            name: '',
            body: ''
        };
    }

    handleClickOpen() {
        this.setState({ open: true });
    }

    handleClose() {
        this.setState({ open: false });
    }

    handleNameChange(name) {
        this.setState({ name: name.target.value });
    }

    handleBodyChange(body) {
        this.setState({ body: body.target.value });
    }

    handleNewNote() {
        this.props.handleNewNote(this.state.name, this.state.body);
        this.handleClose();
    }

    render() {
        const { classes } = this.props;

        return (
        <div>
        <Button
            className={classes.noteButton}
            variant="contained"
            color="primary"
            size="large"
            onClick={this.handleClickOpen.bind(this)}>
            New Note
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
            />
            <TextField
                className={classes.noteBody}
                margin="dense"
                id="body"
                label="Body"
                type="email"
                onChange={this.handleBodyChange.bind(this)}
                fullWidth
                multiline
                rowsMax="20"
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={this.handleClose.bind(this)} color="primary">
                Cancel
            </Button>
            <Button onClick={this.handleNewNote.bind(this)} color="primary">
                Create
            </Button>
            </DialogActions>
        </Dialog>
        </div>
    );
    }
}

HomeDialog.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeDialog);
