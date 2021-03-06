import React from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Statistics from 'views/Statistics';
import KeepAccounts from './views/KeepAccounts';
import NoMatch from './components/NoMatch';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/keepAccounts" exact><KeepAccounts/></Route>
                <Route path="/statistics" exact><Statistics/></Route>
                <Redirect exact from="/" to="/keepAccounts"/>
                <Route path="*"><NoMatch/></Route>
            </Switch>
        </Router>
    );
}

export default App;
