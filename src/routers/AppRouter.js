import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import App from '../components/App';
import Login from '../components/Login';
import Register from '../components/Register';
import Lists from '../components/Lists';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from '../components/PrivateRoute';

export default function AppRouter() {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact={true} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <PrivateRoute path="/lists" component={Lists} />
            <Route component={NotFoundPage} />
        </Switch> 
    </BrowserRouter>
    )
}
