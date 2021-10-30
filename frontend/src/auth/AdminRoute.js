import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated,Admi } from "./helpers";

const Dash = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            (isAuthenticated() && Admi()) ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/"
                    }}
                />
            )
        }
    />
);

export default Dash;