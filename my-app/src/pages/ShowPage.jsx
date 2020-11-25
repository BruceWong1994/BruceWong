import React from 'react';

import Calculator from './Calculator';
import UseRef from './UseRef';

class ShowPage extends React.Component {

    render() {
        return(
            <div className='outer-wrapper'>
                <Calculator />
                <UseRef />
            </div>
        )
    }
}

export default ShowPage;