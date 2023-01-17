import React from 'react';
import AuthDetails from '../components/AuthDetails';
import SignUp from '../components/SignUp';

function UserSignUp({ authUser, location }) {
    return (
        <>
            {authUser ?
                <AuthDetails authUser={authUser} location={location} />
            :
                <>
                    <SignUp />
                    <AuthDetails authUser={authUser} location={location} />
                </>
            }
        </>
    );
}

export default UserSignUp;