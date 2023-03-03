import React from 'react';
import BigBlock from './HomeMainComponents/BigBlock';
import MiniBlock from './HomeMainComponents/MiniBlock';

class HomeMain extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='home-main'>
                <BigBlock
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    btn='button'
                />
                <div className='home-main-mini-block'>
                    <MiniBlock
                        title='Lorem ipsum'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        btn='button'
                    />
                    <MiniBlock
                        title='Lorem ipsum'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        btn='button'
                    />
                    <MiniBlock
                        title='Lorem ipsum'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                        btn='button'
                    />
                </div>
            </div>
        )
    }
}

export default HomeMain