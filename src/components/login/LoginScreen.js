import React, { useContext } from 'react';
import { Button } from 'primereact/button';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ({ history }) => {

    const { dispatch } = useContext( AuthContext );

    const handleLogin = () => {

        const lastPath = localStorage.getItem('lastPath') || '/';

        dispatch({
            type: types.login,
            payload: {
                name: 'Carlos'
            }
        })
        history.replace(lastPath);
    }
    return (
        <div className="container">
            <h1>Login Screen</h1>
            <hr />
            <Button onClick={ handleLogin } label="Login" style={{padding:5, paddingLeft:50, paddingRight: 50}} className="p-button-rounded p-button-warning" />
        </div>
    )
}
