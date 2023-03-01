import React from 'react';
import Facebook from './facebook.png';
import Google from './google.png';
import Vk from './vk.png';

class LoginMain extends React.Component {
    constructor(props) {
        super(props)
        this.State = {
            text: ''
        }
    }

    render() {
        return (
            <div className='login-main'>
                <div className='login-block'>
                    <h3>Login</h3>
                    <input placeholder='email or phone number'></input>
                    <input type='password' placeholder='password'></input>
                    <button>login</button>
                    <p>Sign up with</p>
                    <div className='circles'>
                        <div className='circle'>
                            <img src={Facebook} />
                        </div>
                        <div className='circle'>
                            <img src={Google} />
                        </div>
                        <div className='circle'><img src={Vk} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginMain