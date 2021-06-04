import React from 'react';


class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(<li index={this.props.index}>{this.props.item}</li>)
    }


}


export default Card;
