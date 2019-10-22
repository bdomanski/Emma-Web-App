import React from 'react';
import PropTypes from 'prop-types';

import { styles } from '../material/constants';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

class HomeDialog extends React.Component {

    constructor(props) {
        super(props);

        const { classes } = this.props;

        this.colors = {
            default: classes.dialog0,
            emma: classes.dialogE,
            brian: classes.dialogB
        }

        this.state = {
            open: false,
            name: '',
            body: '',
            checkBrian: false,
            checkEmma: false,
            color: 'default'
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

    handleCheckbox(event) {
        if(event.currentTarget.value === 'emma') {
            this.setState({
                checkBrian: false,
                checkEmma: !this.state.checkEmma,
                color: this.state.checkEmma ? 'default' : 'emma'
            });
        }
        else if(event.currentTarget.value === 'brian') {
            this.setState({
                checkBrian: !this.state.checkBrian,
                checkEmma: false,
                color: this.state.checkBrian ? 'default' : 'brian'
            });
        }
    }

    handleNewNote() {
        this.props.handleNewNote(this.state.name, this.state.body, this.state.color);
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
            <DialogContent className={this.colors[this.state.color]}>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Title"
                type="email"
                onChange={this.handleNameChange.bind(this)}
                multiline
                fullWidth
                rowsMax="1"
            />
            <TextField
                margin="dense"
                id="body"
                label="Body"
                type="email"
                onChange={this.handleBodyChange.bind(this)}
                fullWidth
                multiline
                rowsMax="20"
            />

            <FormControlLabel
                control={
                <Checkbox
                    checked={this.state.checkEmma}
                    onChange={this.handleCheckbox.bind(this)}
                    value="emma"
                    color="secondary"
                />
                }
                label="Emma"
            />
            <FormControlLabel
                control={
                <Checkbox
                    checked={this.state.checkBrian}
                    onChange={this.handleCheckbox.bind(this)}
                    value="brian"
                    color="primary"
                />
                }
                label="Brian"
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
