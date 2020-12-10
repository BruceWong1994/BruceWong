import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import UserList from './UserList';
import UserAdd from './UserAdd';

export default class UserManage extends React.Component {
    render() {
        return (
            <>
                <div className='top-nav'>
                    <span className='nav-button'><Link to='/users/list'>用户列表</Link></span>
                    <span className='nav-button'><Link to='/users/add'>添加用户</Link></span>
                </div>

                <div>
                    <Switch>
                        <Route path='/users/list' component={UserList} />
                        <Route path='/users/add' component={UserAdd} />
                    </Switch>
                </div>
            </>
        )
    }
}