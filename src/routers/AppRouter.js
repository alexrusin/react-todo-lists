import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import App from '../components/App';
import Login from '../components/Login';
import Register from '../components/Register';
import Lists from '../components/Lists';
import NotFoundPage from '../components/NotFoundPage';
import LoggedInRoute from '../components/LoggedInRoute';

export default function AppRouter() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact={true} />
            <LoggedInRoute path="/login" component={Login} />
            <LoggedInRoute path="/register" component={Register} />
            <Route path="/lists" component={Lists} />
            <Route component={NotFoundPage} />
        </Switch> 
    </BrowserRouter>
    )
}
