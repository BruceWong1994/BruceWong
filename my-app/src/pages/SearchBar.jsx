import React from 'react';
import '../css/common.css';
import Suggest from '../component/Suggest';

export default class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            show: false,
            value: ''
        }
    }

    handleChange = (event) => {
        let a = event.target.value;
        console.log(a);

        this.setState({
            show: a ? true : false,
            value: a
        })
    }

    chooseOne = item => {
        console.log(item);
        this.setState({
            value:item
        },()=>{
            //调用搜索接口
        })
    }

    render() {
        return (
            <div>
                <p>
                    <input type="text" style={{ width: 400, height: 30, border: '1px solid #aaa' }} value={this.state.value} onChange={this.handleChange} />
                    <button style={{ height: 30, marginLeft: 10 }}>搜索</button>
                </p>
                {
                    this.state.show ? (
                        <Suggest choose={this.chooseOne} />
                    ) : null
                }

            </div>
        )
    }
}
