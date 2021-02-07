import React from 'react';
import { Route, Switch } from 'react-router-dom'
import RegistrationPage from './Pages/RegistrationPage/RegistrationPage';
import PageNotFound from './Pages/404/PageNotFound';
import UsersPage from "./Pages/Users/UsersPage";

export const routesConfig = [
    {
        path: '/',
        component: RegistrationPage,
        exact: true,
        label: 'Register'
    },
    {
        path: '/users',
        component: UsersPage,
        exact: true,
        label: 'Users'
    },
    {
        path: '*',
        component: PageNotFound
    }
]

const Routes = props => {

    return (
        <Switch>
            {
                routesConfig.map(config => <Route key={config.path} {...config} />)
            }
        </Switch>
    )
}
export default Routes;