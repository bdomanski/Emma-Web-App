import React from 'react';
import PropTypes from 'prop-types';
import { styles } from '../material/constants';
import { RandomCompliment } from '../api/ComplimentPicker'

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';


class Email extends React.Component {

    constructor(props) {
        super(props);
        this.nameToTemplate = {
            needy: { id: 'emma_is_needy', params: {} },
            happy: { id: 'emma_happy', params: { } },
            sad:   { id: 'emma_sad', params: { title: 'Turn that frown upside down :)', message_body: RandomCompliment() } }
        };
    }

    handleSubmit(event) {
      const template = this.nameToTemplate[event.currentTarget.name];

      if(template.id === 'emma_happy') {
          alert('What should I do for this button?');
      }
      else {
        window.emailjs.send('gmail', template.id, template.params)
            .then(res => {
              console.log('Email successfully sent!')
            })
            // Handle errors here however you like, or use a React error boundary
            .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
      }

      this.nameToTemplate.sad.params.message_body = RandomCompliment();
    }

  render() {
    const { classes } = this.props;
	return (
        <Grid container justify="center" alignItems="center" spacing={5}>
            <Grid item>
                <Button variant="contained" color="primary" className={classes.emailButton1} onClick={this.handleSubmit.bind(this)} name="sad">
                    <h1>I'm Feeling Sad</h1>
                </Button>
            </Grid>
            <Grid item>
                <Button variant="contained" className={classes.emailButton2} onClick={this.handleSubmit.bind(this)} name="needy">
                    <h1>I'm Needy</h1>
                </Button>
            </Grid>
            <Grid item>
                <Button variant="contained" color="primary" className={classes.emailButton1} onClick={this.handleSubmit.bind(this)} name="happy">
                    <h1>I'm Feeling Happy</h1>
                </Button>
            </Grid>
        </Grid>
	)
  }
}

Email.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Email);
