import React from 'react';
import { Redirect } from 'react-router-dom';

export default class Settings extends React.Component{
    
    render() {
        // console.log(this.props);
        return (
            // <div>设置页</div>
            <Redirect to={{pathname:'/login', state: {from: this.props.location.pathname}}} />
        )
    }
}