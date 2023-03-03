import React from 'react';
import BigBlock1 from './AboutMainComponents/BigBlock1';
import BigBlock2 from './AboutMainComponents/BigBlock2';
import MiniBlock from './AboutMainComponents/MiniBlock';

class AboutMain extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='about-main'>
                <div className='about-main-big-block'>
                    <BigBlock1
                        h2='Lorem ipsum dolor sit amet'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    />
                    <BigBlock2
                        h2='Lorem ipsum dolor sit amet'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                    />
                </div>
                <div className='about-main-mini-block'>
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

export default AboutMain