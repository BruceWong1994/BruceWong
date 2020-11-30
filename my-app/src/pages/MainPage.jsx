import React from 'react';
// import SearchBar from './SearchBar';
import UseRefN from './UseRefNew';

class MainPage extends React.Component {

    render() {
        return(
            <div className='outer-wrapper'>
                
                <UseRefN />
                {/* <SearchBar /> */}
            </div>
        )
    }
}

export default MainPage;