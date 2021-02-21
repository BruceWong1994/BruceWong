import React from 'react';
import store from '../store/index';

console.log(store);

class CounterByRedux extends React.Component {
    constructor(){
        super();
        this.state = {
            number: store.getState().number
        }
    }

    componentDidMount() {
        console.log('did mount...');
        store.subscribe(this.freshNumber)
    }

    freshNumber = () => {
        this.setState({
            number: store.getState().number
        },()=>{
            console.log(this.state.number);
        })
    }

    render(){
        return (
            <>
                <div style={{fontSize: 26}}>练习redux</div>
                <button onClick={()=>store.dispatch({type: 'INCREASE', amount: 1})}>+</button>
                <span style={{margin: 10}}>{this.state.number}</span>
                <button onClick={()=>store.dispatch({type: 'DECREASE', amount: 1})}>-</button>
            </>
        )
    }
}

export default CounterByRedux;