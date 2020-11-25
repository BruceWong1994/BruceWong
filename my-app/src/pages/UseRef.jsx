import React from 'react';
import '../css/common.css';

class UseRef extends React.Component {
    constructor() {
        super();
        this.state = {
            a: 0,
            b: 0,
            sum: 0
        }
    }

    handleChange = event => {
        // let a = parseInt(this.refs.a.value) || 0;
        let a = parseInt(this.a.value) || 0;
        // let b = parseInt(this.refs.b.value) || 0;
        let b = parseInt(this.b.value) || 0;
        // this.refs.sum.value = a+b || 0;

        this.setState({
            sum: a + b
        })
    }

    render() {
        return (
            <div className='block'>
                <p>UseRef 组件</p>
                {/* <input type="text" ref='a' onChange={this.handleChange} /> +
                <input type="text" ref='b' onChange={this.handleChange} /> = */}
                <input type="text" ref={ref => this.a = ref} onChange={this.handleChange} defaultValue={0} /> +
                <input type="text" ref={ref => this.b = ref} onChange={this.handleChange} defaultValue={0} /> =
                <input type='text' readOnly value={this.state.sum} />
            </div>
        )
    }
}

export default UseRef;