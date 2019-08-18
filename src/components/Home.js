import React from 'react';
import PropTypes from 'prop-types';

import { styles } from '../material/constants';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const featuredPosts = [
    {
        title: 'Featured post',
        date: 'Nov 12',
        description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description:
        'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
];

class Home extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <main>
            {/* Main featured post */}
            <Paper className={classes.mainFeaturedPost}>
                {/* Increase the priority of the hero background image */}
                {
                <img
                    style={{ display: 'none' }}
                    src="https://source.unsplash.com/user/erondu"
                    alt="background"
                />
                }
                <div className={classes.overlay} />
                <Grid container>
                <Grid item md={6}>
                    <div className={classes.mainFeaturedPostContent}>
                    <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                        Title of a longer featured blog post
                    </Typography>
                    <Typography variant="h5" color="inherit" paragraph>
                        Multiple lines of text that form the lede, informing new readers quickly and
                        efficiently about what&apos;s most interesting in this post&apos;s contents.
                    </Typography>
                    <Link variant="subtitle1" href="#">
                        Continue reading…
                    </Link>
                    </div>
                </Grid>
                </Grid>
            </Paper>
            {/* End main featured post */}
            {/* Sub featured posts */}
            <Grid container spacing={4} className={classes.cardGrid}>
                {featuredPosts.map(post => (
                <Grid item key={post.title} xs={12} md={6}>
                    <CardActionArea component="a" href="#">
                    <Card className={classes.card}>
                        <div className={classes.cardDetails}>
                        <CardContent>
                            <Typography component="h2" variant="h5">
                            {post.title}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary">
                            {post.date}
                            </Typography>
                            <Typography variant="subtitle1" paragraph>
                            {post.description}
                            </Typography>
                            <Typography variant="subtitle1" color="primary">
                            Continue reading...
                            </Typography>
                        </CardContent>
                        </div>
                        <Hidden xsDown>
                        <CardMedia
                            className={classes.cardMedia}
                            image="https://source.unsplash.com/random"
                            title="Image title"
                        />
                        </Hidden>
                    </Card>
                    </CardActionArea>
                </Grid>
                ))}
            </Grid>
            {/* End sub featured posts */}
            <Grid container spacing={5} className={classes.mainGrid}>
                {/* Main content */}
                <Grid item xs={12} md={8}>
                <Typography variant="h6" gutterBottom>
                    From the Firehose
                </Typography>
                <Divider />
                </Grid>
                {/* End main content */}
                {/* Sidebar */}
                <Grid item xs={12} md={4}>
                    <Paper elevation={0} className={classes.sidebarAboutBox}>
                        <Typography variant="h6" gutterBottom>
                        About
                        </Typography>
                        <Typography>
                        Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit
                        amet fermentum. Aenean lacinia bibendum nulla sed consectetur.
                        </Typography>
                    </Paper>
                </Grid>
                {/* End sidebar */}
            </Grid>
            </main>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);