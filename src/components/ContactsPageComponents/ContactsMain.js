import React from 'react';
import Email from './email.png';
import Location from './location.png';
import Phone from './phone.png';
import Telegram from './telegram.png'
import BlackSquare from './ContactMainComponents/BlackSquare';

class ContactsMain extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='contacts-main'>
                <div className='contacts-square'>
                    <BlackSquare
                        png={Location}
                        h3='Location'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                    />
                    <BlackSquare
                        png={Phone}
                        h3='Phone Number'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                    />
                    <BlackSquare
                        png={Telegram}
                        h3='Telegram'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                    />
                    <BlackSquare
                        png={Email}
                        h3='Email'
                        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit'
                    />
                </div>
                <div className='contact-us'>
                    <h2>Contact Us</h2>
                    <input className='name' placeholder='Enter your Name'></input>
                    <input className='adress' placeholder='Enter your email adress'></input>
                    <textarea className='request'></textarea>
                </div>
            </div>
        )
    }
}


export default ContactsMain