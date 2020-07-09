import React from 'react';

import './error-indicator.css';

const ErrorIndicator = () =>{
    return(
        <div className="err-cl">
            <div className="err-b">BOOM!</div>
            Something wrong!
        </div>
    );
}

export default ErrorIndicator;