import { Outlet, Link } from 'react-router-dom';
import React from 'react';

class RouterLayout extends React.Component {
    render() {
        return (
            <div className='navigation'>
                <nav>
                    <ul>
                        <div className='navigation-title'>
                            <p>Title</p>
                        </div>
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
        )
    }
}

export default RouterLayout