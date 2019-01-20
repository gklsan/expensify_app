console.log('Higher Order Component(HOC)');

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1> Info </h1>
        <p>Here is the info: {props.info}</p>
    </div>
);

const withAdminMessage = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p> This is the admin message.</p> }
            <WrappedComponent {...props}/>
        </div>
    )
};

const AdminInfo = withAdminMessage(Info);

const requiredAdminAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? (<WrappedComponent {...props} />) : (<p> Please Login with your credential before continue... </p>)}

        </div>
    )
};

const AuthInfo = requiredAdminAuthentication(Info);


// ReactDOM.render(<AdminInfo isAdmin={false} info='Test info'/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info='Test info'/>, document.getElementById('app'));