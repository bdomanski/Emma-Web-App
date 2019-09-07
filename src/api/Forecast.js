import React from 'react';

class Forecast extends React.Component {

    render() {
        var url = "//forecast.io/embed/#lat=" + this.props.latitude +
        "&lon=" + this.props.longitude +
        "&name=" + this.props.name || '' +
        "&color=" + this.props.color || '' +
        "&font=" + this.props.font || '' +
        "&units=" + this.props.unit || '';

        return React.createElement('iframe', { type: 'text/html', height: 190, width: this.props.width, frameBorder: '0', src: url });
    }
}

export default Forecast;
