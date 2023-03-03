import React from 'react';
import HomeHeader from './HomePageComponents/HomeHeader';
import HomeMain from './HomePageComponents/HomeMain';
import HomeFooter from './HomePageComponents/HomeFooter';

class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.State = {
            state: ''
        }
    }

    render() {
        return (
            <div className='all'>
                <HomeHeader title='Lorem ipsum dolor sit amet' />
                <HomeMain />
                <HomeFooter />
            </div>
        )
    }
}

export default HomePage