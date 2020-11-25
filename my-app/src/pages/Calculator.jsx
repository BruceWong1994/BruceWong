import React from 'react';

class Calculator extends React.Component {
    constructor() {
        super();
        this.state = {
            a: 0,
            b: 0,
            sum: 0,
        }
    }

    handleChange = (event) => {
        console.log(event.target);
        let mess = event.target;
        if(mess.name === 'a') {
            this.setState({
                a: parseInt(event.target.value) || 0,
                // a: event.target.value || 0,
                sum: parseInt(event.target.value) + this.state.b || 0 + this.state.b
            })
        }else{
            this.setState({
                b: parseInt(event.target.value) || 0,
                sum: parseInt(event.target.value) + this.state.a || 0 + this.state.a
            })
        }
    }

    render() {
        return (
            <div className='block'>
                <p>Calculator 组件</p>
                <input type="text" onChange={this.handleChange} name='a' value={this.state.a} /> +
                <input type="text" onChange={this.handleChange} name='b' value={this.state.b} /> =
                <span>{this.state.sum}</span>
            </div>
        )

    }
}

export default Calculator;