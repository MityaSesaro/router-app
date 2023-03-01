import React from 'react';

class HomeMain extends React.Component {
    constructor(props) {
        super(props)
        this.State = {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            text2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            text3: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
    }

    render() {
        return (
            <div className='home-main'>
                <div className='home-main-big-block'>
                    <h2>{this.State.text}</h2>
                    <button>{this.props.button1}</button>
                </div>
                <div className='home-main-mini-block'>
                    <div className='mini-blocks'>
                        <h3>{this.props.title1}</h3>
                        <p>{this.State.text1}</p>
                        <button>{this.props.btn}</button>
                    </div>
                    <div className='mini-blocks'>
                        <h3>{this.props.title2}</h3>
                        <p>{this.State.text2}</p>
                        <button>{this.props.btn}</button>
                    </div>
                    <div className='mini-blocks'>
                        <h3>{this.props.title3}</h3>
                        <p>{this.State.text3}</p>
                        <button>{this.props.btn}</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeMain