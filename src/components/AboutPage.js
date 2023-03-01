import React from 'react';
import AboutHeader from './AboutPageComponents/AboutHeader';
import AboutMain from './AboutPageComponents/AboutMain';
import AboutFooter from './AboutPageComponents/AboutFooter';

class AboutPage extends React.Component {
    constructor(props) {
        super(props)
        this.State = {
            state: ''
        }
    }

    render() {
        return (
            <div>
                <AboutHeader title='Lorem ipsum dolor sit amet' />
                <AboutMain button1='button' title1='Lorem ipsum' title2='Lorem ipsum' title3='Lorem ipsum' btn='button' h2='Lorem ipsum dolor sit amet' />
                <AboutFooter />
            </div>
        )
    }
}

export default AboutPage