import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import '../css/MainPage.css';
import '../css/common.css';

import HelloWorld from '../component/helloworld';
import UseRef from './UseRef';
import UseRefN from './UseRefNew';
import SearchBar from './SearchBar';
import UserManage from './UserMange/UserManage';
import Login from './Login/Login';
import Settings from './Settings/Settings';
import CounterByRedux from '../reduxByMyself/CounterByRedux';

export default class MainPage extends React.Component {
    render() {
        return (
            <Router>
                <div className='outer-wrapper'>
                    <div className='nav-bar'>
                        <LeftNav />
                    </div>
                    <div className="main-content">
                        <RouteList />
                    </div>
                </div>
            </Router>

        )
    }
}

class LeftNav extends React.Component {
    render() {
        return (
            <>
                <Link className='link-nav' to='/' >首页</Link>
                <Link className='link-nav' to='/settings'>设置</Link>
                <Link className="link-nav" to='/users'>用户列表</Link>
                <Link className='link-nav' to='/searchBar' >搜索栏</Link>
                <Link className='link-nav' to='/useRef' >练习ref</Link>
                <Link className='link-nav' to='/useRefNew' >练习ref新方式</Link>
                <Link className='link-nav' to='/reduxByMyself'>练习redux</Link>
            </>
        )
    }
}

class RouteList extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={HelloWorld} />
                <Route path='/users' component={UserManage} />
                <Route path='/searchBar' component={SearchBar} />
                <Route path='/useRef' component={UseRef} />
                <Route path='/useRefNew' component={UseRefN} />
                <Route path='/login' component={Login} />
                <Route path='/settings' component={Settings} />
                <Route path='/reduxByMyself' component={CounterByRedux} />
            </Switch>
        )
    }
}