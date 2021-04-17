import React from 'react';
import store from '../../store/index';
import {todo} from '../../store/actions';

export default class TodoList extends React.Component {
    constructor() {
        super();
        this.state = {
            ll: store.getState().list,
            v:''
        }
    }
    componentDidMount() {
        // console.log('get here');
        store.subscribe(this.getNewState)
    }
    getNewState = () => {
        this.setState({
            ll: store.getState().list
        })
    }

    handleChangeValue = e => {
        // console.log(e.target.value);
        let rt = e.target.value;
        // console.log(v);
        // const {v} = this.state;
        this.setState({v:rt})
    }

    handleClick = () => {
        store.dispatch(todo('addtodo',this.state.v));
        this.setState({v:''})
    }

    render() {
        let { ll,v } = this.state;
        // console.log(ll);

        return (
            <>
                <input type="text" value={v} placeholder='have a try' onChange={this.handleChangeValue}/>
                {/* <button onClick={()=>store.dispatch({type: 'addtodo', act: 'gasefwa'})}>确定</button> */}
                <button onClick={this.handleClick}>确定</button>
                {/* {
                    ll.length > 0 && ( */}
                        <div style={{ border: '2px solid lightblue', height: 350, width: 300 }}>
                            {ll.map((item, index) => <p key={index}>{item}</p>)}
                        </div>
                    {/* )
                } */}
            </>
        )
    }
}