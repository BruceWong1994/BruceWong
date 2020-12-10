import React, {Component} from 'react';

export default class UserAdd extends Component {
    render() {
        return (
            <div>
                <p>姓名：<input type='text' /></p>
                <p>年龄：<input type='text' /></p>
                <p>性别：<input type='radio' value='male' name='gender' />男<input type="radio" value='female' name='gender'/>女</p>
            </div>
        )
    }
}