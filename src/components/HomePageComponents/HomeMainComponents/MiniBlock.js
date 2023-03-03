import React from 'react';

class MiniBlock extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='mini-blocks'>
                <h3>{this.props.title}</h3>
                <p>{this.props.text}</p>
                <button>{this.props.btn}</button>
            </div>
        )
    }
}

export default MiniBlock