import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loader from "components/Loader/Loader"

export function createRoutes(routes, padding) {
    return CSRRoutes(routes, padding);
}

export function CSRRoutes(routes, padding) {
    return (
        <Switch>
            {
                routes.map((prop, key) => {

                    if (prop.redirect)
                        return <Redirect exact from={prop.path} to={prop.to} key={key} />;

                    if (prop.disableRoute)
                        return null;

                    const Component = createComponent(prop.component, padding, prop.disablePadding)
                    return <Route exact={prop.exact} path={prop.path} component={Component} key={key} />;

                })
            }
        </Switch>
    );
}


export function SSRRoutes(routes, padding) {
    return (
        <React.Suspense fallback={<div><Loader /></div>} >

            <Switch>
                {
                    routes.map((prop, key) => {

                        if (prop.redirect)
                            return <Redirect exact from={prop.path} to={prop.to} key={key} />;

                        if (prop.disableRoute)
                            return null;

                        const Component = createComponent(React.lazy(prop.component), padding, prop.disablePadding)

                        return <Route exact={prop.exact} path={prop.path} component={Component} key={key} />;

                    })
                }
            </Switch>
        </React.Suspense>
    );
}

function createComponent(Component, padding, disablePadding) {
    return ((props) => (
        <div style={{
            padding: disablePadding ? 0 : padding,
            height: "inherit"
        }} >
            <Component {...props} />
        </div>
    ));
}
