import React from "react";
import { Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...props }) => {
    console.log(props)
    return (
        props.authUser ? <Component {...props} /> : <Redirect to="/sign-up" />
    )
}
export default ProtectedRoute;