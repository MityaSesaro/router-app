import React from 'react';
import ContactsHeader from './ContactsPageComponents/ContactsHeader';
import ContactsMain from './ContactsPageComponents/ContactsMain';
import ContactsFooter from './ContactsPageComponents/ContactsFooter';

class ContactsPage extends React.Component {
    constructor(props) {
        super(props)
        this.State = {
            state: ''
        }
    }

    render() {
        return (
            <div>
                <ContactsHeader title='Lorem ipsum dolor sit amet' />
                <ContactsMain />
                <ContactsFooter />
            </div>
        )
    }
}

export default ContactsPage