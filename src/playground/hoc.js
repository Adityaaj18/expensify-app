//Higher oreder component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is:</p>
    </div>
)

const requireAuthentication = (WrappedComponent) => {
    return(props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props}/>
            ) : (
                <p>PLEASE LOGIN TO VIEW INFO</p>
            )}
            
        </div>
    )
}

const AuthInfo = requireAuthentication(Info)
ReactDOM.render(<AuthInfo isAuthenticated={false} info="details"/>, document.getElementById('app'))