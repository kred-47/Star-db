import React from "react";

const LoginPage = ({isLoggedIn, onLogin}) => {
    return (
        <div className='jumbothron'>
            <p>Login to see secret page!</p>
            <button className='btn btn-primary'
                    onClick={onLogin}>
                Login
            </button>
        </div>
    );
};

export default LoginPage;