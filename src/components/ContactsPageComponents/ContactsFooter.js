import { Outlet, Link } from 'react-router-dom';
import React from 'react';

class ContactsFooter extends React.Component {
    constructor(props) {
        super(props)
        this.State = {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
    }

    render() {
        return (
            <div className='footer'>
                <div className='footer-text'>
                    <p>{this.State.text}</p>
                </div>
                <div className='footer-navigation'>
                    <nav>
                        <ul>
                            <div className='navigation-links'>
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>
                                    <Link to='/about'>About</Link>
                                </li>
                                <li>
                                    <Link to='/contacts'>Contacts</Link>
                                </li>
                                <li>
                                    <Link to='/login'>Sign in</Link>
                                </li>
                            </div>
                        </ul>
                    </nav>
                    <Outlet />
                </div>
            </div>
        )
    }
}

export default ContactsFooter