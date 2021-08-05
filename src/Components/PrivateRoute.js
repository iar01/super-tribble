import React from "react";
import {Redirect, Route} from "react-router-dom"
import {connect} from "react-redux";
import NavbarComponent from "./Navbar";
import {Footer} from "./Footer";

const PrivateRoute = ({component: Component, auth, token, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => {
                // if (auth.isLoading) {
                //     return <h4>Loadingxx...</h4>
                // } else if (auth.token === null) {
                //     return <Redirect to={{
                //         pathname: '/Login',
                //         message: 'Please Login to Continue'
                //     }}/>;
                // } else {
                return <>
                    {/*<NavbarComponent/>*/}
                    <Component{...props}/>
                    <Footer/>
                </>;
                // }
            }}
        />
    );
}
const mapStateToProps = state => ({
    auth: state.auth,
    token: state.token
});
export default connect(mapStateToProps)(PrivateRoute);