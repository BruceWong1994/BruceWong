import React from 'react';
import '../css/common.css';

class UseRefNew extends React.Component {
    constructor() {
        super();
        this.state = {
            sum: 0
        }
        this.myRefa = React.createRef();
        this.myRefb = React.createRef();
    }

    handleChange = () => {
        // console.log(this.myRefa);
        console.log(this.myRefa.current);
        console.log(this.myRefb.current);
        let myA = this.myRefa.current.value || 0;
        let myB = this.myRefb.current.value || 0;
       
        console.log(myA);
        console.log(myB);

        this.setState({
            sum: parseInt(myA) + parseInt(myB)
        })
    }

    render() {
        return (
            <div className='block'>
                <p>UseRefNew 组件——ref的新用法</p>
                <input type="text" ref={this.myRefa} name='a' onChange={this.handleChange}  />
                <b> + </b> 
                <input type="text" ref={this.myRefb} name='b' onChange={this.handleChange} />
                <b> = </b>
                <input type='text' readOnly value={this.state.sum} />
            </div>
        )
    }
}

export default UseRefNew;