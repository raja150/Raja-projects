import React from 'react';
import { NavLink, Route, RouteProps } from 'react-router-dom';
import ErrorBoundary from './Error/ErrorBoundary';
import SessionStorageService from './services/Session'
// Define the type for the component prop
interface PrivateRouteProps {
    component: React.ComponentType<any>; // React component
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
    debugger
    return (
        <Route
            {...rest}
            element={
                SessionStorageService.getUser() ? (
                    <ErrorBoundary>
                        <Component />
                    </ErrorBoundary>
                ) : (
                    <NavLink to="/login" />
                )
            }
        />
    );
};

export default PrivateRoute;
