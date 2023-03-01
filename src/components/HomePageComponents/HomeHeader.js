import React from 'react';
import Logo from './Logo.png';

class HomeHeader extends React.Component {
    constructor(props) {
        super(props)
        this.State = {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
    }

    render() {
        return (
            <div className='header'>
                <div className='header-text'>
                    <h1>{this.props.title}</h1>
                    <p>{this.State.text}</p>
                </div>
                <div className='header-img'>
                    <img src={Logo} />
                </div>
            </div>
        )
    }
}

export default HomeHeader