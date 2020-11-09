import React from 'react';
import {observer} from 'mobx-react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import routes from '~/routes';

import Navbar from '~c/navbar';

@observer class App extends React.Component{
    render(){
        let routesComponents = routes.map((route) => {
            return <Route path={route.url}
                          component={route.component}
                          exact={route.exact} 
                          key={route.url}
                    />;
        });

        return (
            <Router>
                <Navbar/>
                <br/>
                <div className="container">
                    <Switch>
                        {routesComponents}
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;