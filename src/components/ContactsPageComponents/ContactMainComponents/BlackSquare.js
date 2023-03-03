import React from 'react';

class BlackSquare extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='black-square'>
                <img src={this.props.png} />
                <h3>{this.props.h3}</h3>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default BlackSquare