import React from 'react';

class NotFoundPage extends React.Component {
    constructor(props) {
        super(props)
        this.State = {
            state: ''
        }
    }

    render() {
        return (
            <div className='not-found'>
                <h3>404</h3>
                <p>Sorry, this page does not exist</p>
                <div>

                </div>
            </div>
        )
    }
}

export default NotFoundPage