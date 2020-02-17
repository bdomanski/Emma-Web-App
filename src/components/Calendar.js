import React from 'react'
import PropTypes from 'prop-types';
import { styles } from '../material/constants';
import { withStyles } from '@material-ui/core/styles';

class Calendar extends React.Component {

    render() {
        const { isMobile } = this.props;
        const width = isMobile ? 636 : 1200;

        return (
            <iframe
                src='https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FNew_York&amp;src=ZG9tYW5za2kuYnJpYW5AZ21haWwuY29t&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=bHBwYjI0Mm1pOWlmMWUzMDU0ZmQ2OGI4NG9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=bXFza3VmazJjdDZmY2F0NjRzbTJqaWRtMDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=NWdicHRhZTd0MHFlNmM1YThsdTVocWpib2dAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZXdlc3QxMTA0QGdtYWlsLmNvbQ&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=MWpjZTYwYWdsZGFtdGtnZmVvcjFya2dpZzhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%237986CB&amp;color=%2333B679&amp;color=%230B8043&amp;color=%23009688&amp;color=%23F4511E&amp;color=%23D50000&amp;color=%230B8043&amp;color=%237CB342'
                width={width}
                height='800'
                frameBorder='0'
                scrolling='no'
                title='Brians Calendar'
            />
        );
    }
}

Calendar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Calendar);
