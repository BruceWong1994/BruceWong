import React from 'react';

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
        console.log(this.refs);

        let a = parseInt(this.refs.a.value) || 0;
        let b = parseInt(this.refs.b.value) || 0;
        // this.refs.sum.value = a+b || 0;
        this.setState({
            sum:a+b
        })
        
    }
    render() {
        return (
            <div>
                <input type="text" ref='a' onChange={this.handleChange} defaultValue={0} /> +
                <input type="text" ref='b' onChange={this.handleChange} defaultValue={0} /> =
                <input value={this.state.sum} />
            </div>
        )
    }
}

export default UseRef