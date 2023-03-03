import React from 'react';

class BigBlock2 extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='big-block2'>
                <h2>{this.props.h2}</h2>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default BigBlock2