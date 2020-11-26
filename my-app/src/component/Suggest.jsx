import React from 'react';
import '../css/common.css';
import '../css/Suggest/Suggest.css';

const arr = ['1.choose', '2.boomshakalaka', '3.bullshit', '4.nowhere'];

export default class Suggest extends React.Component {
    chooseOne = it => {
        this.props.choose(it);
    }

    render() {
        return (
            <div className=''>
                <ul>
                    {
                        arr.map(item => (
                            <ol key={item} onClick={()=>this.chooseOne(item)}>{item}</ol>
                        ))
                    }
                </ul>
            </div>
        )
    }
}