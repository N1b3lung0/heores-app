import React from 'react';
import { Button } from 'primereact/button';

export const LoginScreen = ({ history }) => {

    const handleLogin = () => {
        history.replace('/');
    }
    return (
        <div className="container">
            <h1>Login Screen</h1>
            <hr />
            <Button onClick={ handleLogin } label="Login" style={{padding:5, paddingLeft:50, paddingRight: 50}} className="p-button-rounded p-button-warning" />
        </div>
    )
}
