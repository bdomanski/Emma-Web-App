export const myPalette = {
    blue: '#00bcd4',
    green: '#4caf50',
    orange: '#ff9800',
    red: '#f44336',
    purple: '#9c27b0'
}

export const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 1000,
      backgroundColor: theme.palette.background.paper,
    },
    paper: {
      maxWidth: 500,
      minWidth: 300,
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(2),
    },
    homePaper0: {
      marginBottom: theme.spacing(2),
      padding: theme.spacing(2),
    },
    homePaperE: {
      marginBottom: theme.spacing(2),
      padding: theme.spacing(2),
      color: theme.palette.background.paper,
      backgroundColor: myPalette.purple
    },
    homePaperB: {
      marginBottom: theme.spacing(2),
      padding: theme.spacing(2),
      color: theme.palette.background.paper,
      backgroundColor: myPalette.orange
    },
    inline: {
      display: 'inline',
    },
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        margin: '20px',
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
        backgroundColor: theme.palette.primary.main,
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
        color: '#FFFFFF',
        fontSize: '15px'
    },
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
        padding: theme.spacing(6),
        paddingRight: 0,
        },
    },
    mainGrid: {
        marginTop: theme.spacing(3),
    },
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
    dialog0: {
    },
    dialogE: {
        color: theme.palette.background.paper,
        backgroundColor: myPalette.purple
    },
    dialogB: {
        color: theme.palette.background.paper,
        backgroundColor: myPalette.orange
    },
    markdown: {
        ...theme.typography.body2,
        padding: theme.spacing(3, 0),
    },
    sidebarAboutBox: {
        padding: theme.spacing(2),
        backgroundColor: theme.palette.grey[200],
    },
    sidebarSection: {
        marginTop: theme.spacing(3),
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing(8),
        padding: theme.spacing(6, 0),
    },
    emailButton1: {
      maxWidth: '240px',
      maxHeight: '135px',
      minWidth: '240px',
      minHeight: '135px'
    },
    emailButton2: {
      maxWidth: '240px',
      maxHeight: '135px',
      minWidth: '240px',
      minHeight: '135px',
      color: theme.palette.background.paper,
      backgroundColor: myPalette.red,
      '&:hover': {
         background: myPalette.red,
      },
    },
    noteButton: {
      justifyContent: 'space-around',
      backgroundColor: myPalette.red,
      color: theme.palette.background.paper,
      '&:hover': {
         background: myPalette.red,
      },
    },
    divider: {
      marginBottom: theme.spacing(4),
    },
    home: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    masonryGrid: {
        display: 'flex',
        width: 'auto',
        padding: theme.spacing(2),
    },
    masonryGridColumn: {
        padding: theme.spacing(1),
        backgroundClip: 'padding-box',
    },
    locationButton: {
        margin: '1px',
        marginTop: '0px'
    },
    topGrid: {
        margin: '8px'
    },
    container: {
        backgroundColor: theme.palette.background.paper,
        minHeight: document.documentElement.scrollHeight
    }
});
