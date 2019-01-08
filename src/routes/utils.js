import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loader from "../components/Loader/Loader"

export function createRoutes(routes) {
    return CSRRoutes(routes);
}

export function CSRRoutes(routes) {
    return (
        <Switch>
            {
                routes.map((prop, key) => {

                    const component = prop.component;
                    if (prop.redirect)
                        return <Redirect exact from={prop.path} to={prop.to} key={key} />;

                    let r = <Route exact={prop.exact} path={prop.path} component={component} key={key} />;
                    if (prop.disableRoute)
                        r = null;
                
                    return r;
                })
            }
        </Switch>
    );
}


export function SSRRoutes(routes) {
    return (
        <React.Suspense fallback={<div><Loader /></div>} >

            <Switch>
                {
                    routes.map((prop, key) => {

                        const Component = React.lazy(prop.component);
                        if (prop.redirect)
                            return <Redirect exact from={prop.path} to={prop.to} key={key} />;

                        let r = <Route exact={prop.exact} path={prop.path} component={Component} key={key} />;
                        if (prop.disableRoute)
                            r = null;
                        if (prop.childs)
                            return [
                                createRoutes(prop.childs),
                                r
                            ]
                        return r;
                    })
                }
            </Switch>
        </React.Suspense>
    );
}
