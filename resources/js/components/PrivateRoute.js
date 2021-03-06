import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from 'react-redux'

function PrivateRoute({ component: Component, ...rest }) {
  
  const auth = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) =>
        auth.isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

export default PrivateRoute;