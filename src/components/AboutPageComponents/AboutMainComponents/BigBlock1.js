import React from 'react';

class BigBlock1 extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='big-block1'>
                <h2>{this.props.h2}</h2>
                <p>{this.props.text}</p>
            </div>
        )
    }
}

export default BigBlock1