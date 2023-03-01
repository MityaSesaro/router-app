import React from 'react';
import LoginMain from './LoginPageComponents/LoginMain';
import LoginFooter from './LoginPageComponents/LoginFooter';

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.State = {
            state: ''
        }
    }

    render() {
        return (
            <div>
                <LoginMain />
                <LoginFooter />
            </div>
        )
    }
}

export default LoginPage