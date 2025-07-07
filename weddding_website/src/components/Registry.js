import React from 'react';
import Navbar from './Navbar'

const Registry = () => {
    return (
        <div className='App'>
        <div className='registry-container'>
            <Navbar/>
            <div className='registry-main-text-container'>
                <h1 className='primary-heading'>Registry Info</h1>

                <p><br></br>We love sentimental gifts from friends!</p>
                <p><br></br>Besides that, we'd much prefer cash or a check as a gift. We'll be putting any money towards our honeymoon (in Greece!) and updating our home.</p>
                <p><br></br>Any gifts are not expected but greatly appreciated. Thank you!</p>
            </div>
        </div>
      </div>
    );
};

export default Registry;