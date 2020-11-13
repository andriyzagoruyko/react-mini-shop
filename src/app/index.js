import React from 'react';
import withStore from '~/hocs/withStore';
import {BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';
import routes, { routesMap } from '~/routes';
import Notifications from '~p/notifications';
import Header from '~c/header';


class App extends React.Component{
    render(){
        let cart = this.props.stores.cart;

        let routesComponents = routes.map((route) => {
            return <Route path={route.url}
                          component={route.component}
                          exact={route.exact} 
                          key={route.url}
                    />;
        });

        return (
        <Router>
            <Notifications/>
            <Header cartCnt={cart.cartCnt} total={cart.total}/>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <Switch>
                            {routesComponents}
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
        )
    }
}

export default withStore(App);