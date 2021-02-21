import React from 'react';
import {Link} from 'react-router-dom';

export default class Login extends React.Component{
    render() {
        console.log(this.props);
        return (
            <div style={{fontSize:26}}>
                登录页：请登录

                <p><Link to='/' >返回首页</Link></p>
            </div>
        )
    }
}