import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Statistics from "views/Statistics";
import KeepAccounts from './views/KeepAccounts';
import NavigationBar from './components/NavigationBar';

 function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/keepAccounts">
                        <KeepAccounts />
                    </Route>
                    <Route path="/statistics">
                        <Statistics />
                    </Route>
                </Switch>
                <nav>
                    <NavigationBar/>
                </nav>
            </div>
        </Router>
    );
}
export default App;
