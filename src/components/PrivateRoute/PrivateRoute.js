import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserLoginContext } from '../../App';

function PrivateRoute({ children, ...rest }) {
    const [userSignUp, setUserSignUp] = useContext(UserLoginContext);
    return (
      <Route
        {...rest}
        render={({ location }) =>
        userSignUp.isLogin ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
  
export default PrivateRoute;