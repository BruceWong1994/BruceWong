import React from 'react';

export default class Login extends React.Component{
    render() {
        console.log(this.props);
        return (
            <div style={{fontSize:26}}>
                登录页：请登录
            </div>
        )
    }
}