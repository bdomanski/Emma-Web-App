import React from 'react';
import PropTypes from 'prop-types';
import { styles } from '../material/constants';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const nameToTemplate = {
    needy: 'emma_is_needy',
    happy: 'not_set',
    sad: 'not_set'
}

class Email extends React.Component {

  render() {
    const { classes } = this.props;
	return (
        <Grid container justify="center" alignItems="center" spacing={5}>
            <Grid item>
                <Button variant="contained" color="primary" className={classes.emailButton} onClick={this.handleSubmit.bind(this)} name="needy">
                    <h1>I'm Needy</h1>
                </Button>
            </Grid>

            <Grid item>
                <Button variant="contained" color="secondary" className={classes.emailButton} onClick={this.handleSubmit.bind(this)} name="happy">
                    <h1>I'm Feeling Happy</h1>
                </Button>
            </Grid>

            <Grid item>
                <Button variant="contained" color="primary" className={classes.emailButton} onClick={this.handleSubmit.bind(this)} name="sad">
                    <h1>I'm Feeling Sad</h1>
                </Button>
            </Grid>
        </Grid>
	)
  }

  handleSubmit(event) {
    const templateId = nameToTemplate[event.currentTarget.name];

    console.log(templateId);

    // window.emailjs.send('gmail', templateId,{})
    //     .then(res => {
    //       console.log('Email successfully sent!')
    //     })
    //     // Handle errors here however you like, or use a React error boundary
    //     .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }
}

Email.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Email);
