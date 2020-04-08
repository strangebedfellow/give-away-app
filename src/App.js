import React from 'react';
import {
  HashRouter,
  Route,
  Switch
} from 'react-router-dom';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';

function App() {
    return <HashRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/wylogowano" component={Logout} />
            </Switch>
        </HashRouter>
}

export default App;
