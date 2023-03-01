import React from 'react';
import Email from './email.png';
import Location from './location.png';
import Phone from './phone.png';
import Telegram from './telegram.png'

class ContactsMain extends React.Component {
    constructor(props) {
        super(props)
        this.State = {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        }
    }

    render() {
        return (
            <div className='contacts-main'>
                <div className='contacts-square'>
                    <div className='black-square'>
                        <img src={Location} />
                        <h3>Our Office</h3>
                        <p>{this.State.text}</p>
                    </div>
                    <div className='black-square'>
                        <img src={Phone} />
                        <h3>Phone Number</h3>
                        <p>{this.State.text}</p>
                    </div>
                    <div className='black-square'>
                        <img src={Telegram} />
                        <h3>Telegram</h3>
                        <p>{this.State.text}</p>
                    </div>
                    <div className='black-square'>
                        <img src={Email} />
                        <h3>Email</h3>
                        <p>{this.State.text}</p>
                    </div>
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