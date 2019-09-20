import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom'

import Magazine from '@containers/magazine'
import MagazineAdd from '@containers/magazine/add'
import MagazineDetail from '@containers/magazine/detail'
import Order from '@containers/order'
import OrderDetail from '@containers/order/detail'
import Subscribe from '@containers/subscribe'
import System from '@containers/system'

class routes extends Component {
    render() {
        return (
            <div className='content'>
                <Switch>
                    <Route exact path='/' render={() => (
                        <Redirect to="/magazine" />
                    )}>
                    </Route>
                    <Route exact path='/magazine' component={Magazine}></Route>
                    <Route exact path='/magazine/add' component={MagazineAdd}></Route>
                    <Route exact path='/magazine/:id' component={MagazineDetail}></Route>
                    <Route exact path='/order' component={Order}></Route>
                    <Route exact path='/order/:id' component={OrderDetail}></Route>
                    <Route exact path='/subscribe' component={Subscribe}></Route>
                    <Route exact path='/system' component={System}></Route>
                    <Redirect to={'/404'}></Redirect>
                </Switch>
            </div>
        );
    }
}

export default routes;