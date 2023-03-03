import React from 'react';

class BigBlock extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='home-main-big-block'>
                <h2>{this.props.text}</h2>
                <button>{this.props.btn}</button>
            </div>
        )
    }
}

export default BigBlock