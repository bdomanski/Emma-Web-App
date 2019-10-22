import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-css'
import { Storage } from 'aws-amplify';

import { styles } from '../material/constants';
import HomeDialog from './HomeDialog';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.storagekey = 'tiledata';

        Storage.get(this.storagekey, { download: true })
            .then(result => {
                this.setState({
                    tileData: JSON.parse(result.Body.toString())
                });
            })
            .catch(err => {
                console.log(err);
        });

        const { classes } = this.props;
        this.colors = {
            default: classes.homePaper0,
            emma: classes.homePaperE,
            brian: classes.homePaperB
        }

        this.state = {
            tileData: []
        };

    }

    handleNewNote(name, body, color) {
        this.state.tileData.push({ name: name, body: body, color: color });
        this.state.tileData.sort((a, b) => (a.body.length > b.body.length) ? 1 : -1);
        Storage.put(this.storagekey, JSON.stringify(this.state.tileData))
            .then (result => console.log(result))
            .catch(err => console.log(err));
        this.setState({ tileData: this.state.tileData });
    }

    handleDelete(event) {
        this.state.tileData.splice(event.currentTarget.value, 1);
        this.state.tileData.sort((a, b) => (a.body.length > b.body.length) ? 1 : -1);
        Storage.put(this.storagekey, JSON.stringify(this.state.tileData))
            .then (result => console.log(result))
            .catch(err => console.log(err));
        this.setState({ tileData: this.state.tileData });
    }

    getMasonryItems() {
        const { classes } = this.props;

        return this.state.tileData.reverse().map((tile, index) => (
            <Paper className={this.colors[tile.color] || classes.homePaper0} key={index}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item xs>
                        <Typography variant='h5'>{tile.name}</Typography>
                        <Typography variant='subtitle2'>
                            <pre style={{ fontFamily: 'inherit' }}>
                                {tile.body}
                            </pre>
                        </Typography>
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

    render() {
        const { classes } = this.props;

        return (
            <div>
            <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                <HomeDialog handleNewNote={this.handleNewNote.bind(this)}/>
            </Grid>

            <Masonry
                breakpointCols={{default: this.state.tileData.length < 3 ? this.state.tileData.length : 3}}
                className={classes.masonryGrid}
                columnClassName={classes.masonryGridColumn}
            >
                {this.getMasonryItems()}
            </Masonry>
            </div>
        );
    }
}


Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
